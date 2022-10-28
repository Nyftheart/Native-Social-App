import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigation/AuthProvider';
import styled from 'styled-components/native';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {register} = useContext(AuthContext);

  return (
    <StyleView>
      <Title>Creation compte</Title>

      <FormInput
        lableVlaue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        lableVlaue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Mot de Passe"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        lableVlaue={confirmPassword}
        onChangeText={userConfirmPassword =>
          setConfirmPassword(userConfirmPassword)
        }
        placeholderText="Confirmation du Mot de Passe"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Création"
        onPress={() => register(email, password)}
      />

      <TextPrivateView>
        <Text>En vous enregistrant vous acceper nos terme de</Text>
        <TouchableOpacity onPress={() => 'Terms Clicked'}>
          <TextPrivate style={{color: '#e88832'}}>
            Securité{' '}
          </TextPrivate>
        </TouchableOpacity>
        <TextPrivate>et</TextPrivate>
        <TouchableOpacity onPress={() => 'Terms Clicked'}>
          <TextPrivate style={{color: '#e88832'}}>
            {' '}
            Politque
          </TextPrivate>
        </TouchableOpacity>
      </TextPrivateView>

      <SocialButton
        buttonTitle="Connextion avec google (non fonctionel)"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <HaveButton
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}>
        <NavButtonText>Deja un Compte</NavButtonText>
      </HaveButton>
    </StyleView>
  );
};

export default SignUpScreen;

const StyleView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
  color: #f9fafd;
`;
const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 10px;
  color: #051d5f;
`;
const TextPrivate = styled.Text`
  margin-vertical: 5px;
`;
const TextPrivateView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-vertical: 30px;
  justify-content: center;
`;
const NavButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #2e64e5;
`;
const HaveButton = styled.TouchableOpacity`
  margin-vertical: 35px;
`;


