from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT
from rest_framework.views import APIView

# models
from rest_framework.authtoken.models import Token

# serializers
from apps.user.api.serializers import UserTokenSerializer
from apps.user.api.serializers import EmailLoginSerializer

# permissions


class Login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer  = EmailLoginSerializer(data = request.data, context = {'request': request})
        if serializer .is_valid():
            user = serializer.validated_data['user']
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer  = UserTokenSerializer(user)
                if created:
                    return Response({
                    'message': 'Inicio de sesion exitoso',
                    'user': user_serializer.data,
                    'token': token.key},
                    status=HTTP_200_OK)
                else:
                    return Response({
                        'message': 'Ya se ha iniciado sesión'
                    },
                    status=HTTP_409_CONFLICT)
            else:
                return Response({'message': 'Este usuario no puede iniciar sesión'}, status=HTTP_401_UNAUTHORIZED)
        else:
            return Response({'message': 'Usuario o contraseña no son válidos'}, status=HTTP_400_BAD_REQUEST)


class Logout(APIView):
    def post(self, request, *args, **kwargs):
        try:
            token = request.data.get('token')
            token = Token.objects.get(key = token)
            if token:
                token.delete()
                return Response({
                    'message': 'token eliminado'                
                }, status=HTTP_200_OK)
            return Response({'message': 'No se ha encontrado usuario con el token'}, status=HTTP_400_BAD_REQUEST)
        except:
            return Response({'message': 'No se ha encontrado un token en la peticion'}, status=HTTP_400_BAD_REQUEST)



        


    