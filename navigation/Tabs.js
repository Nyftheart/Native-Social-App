import {View, Text, Image} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/Posts';

import ProfileScreen from '../screens/ProfileScreen';

import Home from '../assets/icons/home.png';

import User from '../assets/icons/user.png';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#051d5f' : '#086',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={User}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#051d5f' : '#086',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
