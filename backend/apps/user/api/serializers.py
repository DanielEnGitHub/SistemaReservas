from rest_framework import serializers

from apps.user.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    # create a new user with encrypted password
    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data.get('password'))
        user.save()
        return user


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    # overriding the to_representation method
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
    


    