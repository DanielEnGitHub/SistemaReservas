from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED

# models
from apps.user.models import CustomUser

# serializers
from .serializers import UserSerializer, UserListSerializer


"""
Vista basada en funcion para creacion y listado de usuarios

- En el metodo get se utiliza el serializer UserListSerializer y en post UserSerializer

"""


@api_view(['GET', 'POST'])
def user_api_view(request):
    if request.method == 'GET':
        user = CustomUser.objects.filter(is_active=True).values(
            'id', 'username', 'first_name', 'last_name', 'email', 'date_joined', 'passport_number', 'nationality', 'date_of_birth')
        user_serializer = UserListSerializer(user, many=True)
        return Response(user_serializer.data, status=HTTP_200_OK)

    elif request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response({
                'message': 'Usuario creado exitosamente',
                'user': user_serializer.data}, status=HTTP_201_CREATED)
        return Response(user_serializer.errors)


"""
Vista basada en funcion para obtener detalles de usuario

"""


@api_view(['GET'])
def user_detail_api_view(request, pk):
    if request.method == 'GET':
        user = CustomUser.objects.get(pk=pk)
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data, status=HTTP_200_OK)
