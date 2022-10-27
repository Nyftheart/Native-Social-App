import React, {useContext, useState } from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../navigation/AuthProvider';



const LoginScreen = ({navigation}) =>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const {login} = useContext(AuthContext)
    return(
        <View style={styles.Container}>


            <Text style={styles.text}>Ybadge Demo 1.1.4</Text>

            <FormInput
              lableVlaue={email}
              onChangeText={(userEmail)=>setEmail(userEmail)}
              placeholderText='Email'
              iconType='user'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />

            <FormInput
              lableVlaue={password}
              onChangeText={(userPassword)=>setPassword(userPassword)}
              placeholderText='Mot de passe'
              iconType='lock'
              secureTextEntry={true}
            />

            <FormButton
              buttonTitle='Connection'
              onPress={()=> login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
                <Text style={styles.navButtonText}>Mot de Passe Oublier ? (non Fonctionel)</Text>
            </TouchableOpacity>



            <SocialButton
             buttonTitle='Connection avec Google (non Fontionel)'
             btnType='google'
             color='#de4d41'
             backgroundColor='#f5e7ea'
             onPress={()=>{}}
            />


            <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('SignUpScreen')}}>
                <Text style={styles.navButtonText}>Pas de Compte ? Cree le ici !</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
     Container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 200,
        width: 200,
        resizeMode:'cover',
      },
      text: {
        // fontFamily: 'Lato-Regular',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
      },

})
