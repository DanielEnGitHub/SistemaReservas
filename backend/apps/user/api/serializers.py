from rest_framework import serializers
from django.contrib.auth import get_user_model

from apps.user.models import CustomUser
from rest_framework.authtoken.models import Token

# serializador base


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    # sobrescribiendo el metodo create para encriptar la contraseña
    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data.get('password'))
        user.save()

        Token.objects.create(user=user)
        return user

# serializador para listado


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    # sobrescribiendo el metodo to_representation para perzonalizar la data serializada
    def to_representation(self, instance):
        return {
            'id': instance['id'],
            'username': instance['username'],
            'first_name': instance['first_name'],
            'last_name': instance['last_name'],
            'email': instance['email'],
            'date_joined': instance['date_joined'],
            'passport_number': instance['passport_number'],
            'nationality': instance['nationality'],
            'date_of_birth': instance['date_of_birth'],
        }


# serializador para user login
class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'first_name', 'last_name', 'email',
                  'date_joined', 'passport_number', 'nationality', 'date_of_birth')

# serializador para login


class EmailLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = get_user_model().objects.filter(email=email).first()

            if user and user.check_password(password):
                if not user.is_active:
                    raise serializers.ValidationError(
                        "Este usuario no puede iniciar sesión.")
                data['user'] = user
            else:
                raise serializers.ValidationError(
                    "Usuario o contraseña no válidos.")
        else:
            raise serializers.ValidationError(
                "Debe proporcionar una dirección de correo electrónico y contraseña.")

        return data
