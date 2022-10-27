import React from 'react';
import {Text,View,StyleSheet, Button,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
    // we use replace here because we doest want to give user control to use back button to see storyboard
    onSkip={()=>navigation.replace('LoginScreen')}
    onDone={()=>navigation.navigate('LoginScreen')}
    pages={[
        {
            backgroundColor: '#8CD4F3',
            title: 'HHHHH',
            subtitle: 'hhhhhhhhhhhhhh',
        },
        {
            backgroundColor: '#CECBCA',
            title: 'GGGGG',
            subtitle: 'ggggggggggg',
        },
        {
            backgroundColor: '#FF7E33',
            title: 'EEEEEEEE',
            subtitle: 'eeeeeeeeeeeeeeeeee',
        },

]}
/>
  );
}

export default OnBoardingScreen;
