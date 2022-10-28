import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBordingScreen';
import LoginScreen from '../screens/LoginScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'OnBoardingScreen';
  } else {
    routeName = 'LoginScreen';
  }
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="OnBoadingScreen"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
