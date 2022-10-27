import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'

const ProfileScreen = () => {
    const {user, logout} = useContext(AuthContext)  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome {user.uid}</Text>
          <FormButton buttonTitle='Logout' onPress={()=> logout()} />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: '#051d5f'
    }
})