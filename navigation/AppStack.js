import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import Post from '../screens/Post';
const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
       headerShown: false
     }}
    >
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name="Post" component={Post} options={{ headerShown: true, }}/>
    </Stack.Navigator>
  )
}

export default AppStack
