import React, { useContext, useState } from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../navigation/AuthProvider';



const SignUpScreen = ({navigation}) =>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const {register} = useContext(AuthContext)  


    return(
        <View style={styles.Container}>

            
            <Text style={styles.text}>Create a account</Text>

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
              placeholderText='Password'
              iconType='lock'
              secureTextEntry={true}
            />

            <FormInput 
              lableVlaue={confirmPassword}
              onChangeText={(userConfirmPassword)=>setConfirmPassword(userConfirmPassword)}
              placeholderText='Confirm Password'
              iconType='lock'
              secureTextEntry={true}
            />

            <FormButton 
              buttonTitle='Sign Up'
              onPress={() => register(email, password)}            />

            <View style={styles.textPrivate}>
                <Text>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={()=>('Terms Clicked')}>
                    <Text style={[styles.color_textPrivate,{color:'#e88832'}]} >Term of security </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}>and </Text>
                <TouchableOpacity onPress={()=>('Terms Clicked')}>
                    <Text style={[styles.color_textPrivate,{color:'#e88832'}]} > Privacy Polices</Text>
                </TouchableOpacity>
            </View>

            <SocialButton 
             buttonTitle='Sign Up with facbook'
             btnType='facebook'
             color='#4867aa'
             backgroundColor='#e6eaf4'
             onPress={()=>{}}
            />

            <SocialButton 
             buttonTitle='Sign Up with Google'
             btnType='google'
             color='#de4d41'
             backgroundColor='#f5e7ea'
             onPress={()=>{}}
            />


            <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('LoginScreen')}}>
                <Text style={styles.navButtonText}>have an account? Sign in</Text>
            </TouchableOpacity>
             
            

        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
     Container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:'f9fafd'
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
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Regular',
        color: 'grey',
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