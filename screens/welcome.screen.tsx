import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {YelGradientBtn} from '../components/YelGradientBtn';

import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function WelcomeScreen({ navigation }: Props): React.JSX.Element {
  
  {/**
    <Image
          style={{width: 166, height: 160}}
          resizeMode="cover"
          source={require('../assets/img/logo_img.png')}
        />*/}
  return (
    <>
      <View style={styles.logoContainer}>
        
      </View>

      <Text style={styles.mainText}>Welcome to our game!</Text>

      <Text style={styles.text}>
        Get ready to plunge into the world of exciting quests and interesting
        tasks that will test your logic, reaction speed and ingenuity. A variety
        of challenges await you. Each quest is a new adventure that needs your
        attention, strategic thinking, and intuition.
      </Text>

      <View style={{alignItems: 'center', marginTop: 150}}>
        <YelGradientBtn
          text="Continue"
          onClick={() => navigation.navigate('StartGame')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontFamily: 'Trade Winds',
    fontSize: 24,
    lineHeight: 35,
    textAlign: 'center',
    color: '#FFFA8A',
  },
  text: {
    marginTop: 24,
    fontFamily: 'Instrument Sans Regular',
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'center',
    marginHorizontal: 35,
  },
  gradient: {
    flex: 1, // Fill the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 24,
  },
});

export default WelcomeScreen;
