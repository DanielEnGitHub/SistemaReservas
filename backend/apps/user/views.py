from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT
from rest_framework.views import APIView

# models
from rest_framework.authtoken.models import Token

# serializers
from apps.user.api.serializers import UserTokenSerializer
from apps.user.api.serializers import EmailLoginSerializer


"""
Vista basada en clase para login usando vista generica ObtainAuthToken

- Se utiliza EmailLoginSerializer en lugar de self.get_serializer, para validar email en lugar de username.

"""


class Login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = EmailLoginSerializer(
            data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserTokenSerializer(user)
                if created:
                    return Response({
                        'message': 'Inicio de sesión exitosa',
                        'user': user_serializer.data,
                        'token': token.key},
                        status=HTTP_200_OK)
                else:
                    return Response({
                        'message': 'Inicio de sesión exitoso, el token ya existe'
                    },
                        status=HTTP_409_CONFLICT)
            else:
                return Response({'message': 'La usuario está inactiva'}, status=HTTP_401_UNAUTHORIZED)
        else:
            return Response({'message': 'Credenciales de acceso invalidos'}, status=HTTP_400_BAD_REQUEST)


"""
Vista basada en clase para logout usando vista APIView

- se obtiene el token enviado en la solicitud y se valida si existe para eliminarlo

"""


class Logout(APIView):
    def post(self, request, *args, **kwargs):
        try:
            token = request.data.get('token')
            token = Token.objects.get(key=token)
            if token:
                token.delete()
                return Response({
                    'message': 'Token eliminado exitosamente'
                }, status=HTTP_200_OK)
            return Response({'message': 'Token inválido'}, status=HTTP_400_BAD_REQUEST)
        except:
            return Response({'message': 'Ocurrió un error'}, status=HTTP_400_BAD_REQUEST)
