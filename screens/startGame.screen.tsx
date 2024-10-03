import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {YelGradientBtn} from '../components/YelGradientBtn';

import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}
{/**
  <Image
          style={{width: 166, height: 160}}
          resizeMode="cover"
          source={require('../assets/img/logo_img.png')}
        /> */}
function StartGameScreen({navigation}: Props): React.JSX.Element {
  return (
    <>
      <View style={styles.logoContainer}>
        
      </View>

      <Text style={styles.mainText}>Start your journey right now!</Text>

      <Text style={styles.text}>
        Choose your path, overcome obstacles and unlock new levels filled with
        unexpected plot twists. Will you be able to pass all the tests and reach
        the finish line? Ready for the challenge? Start your journey right now!
      </Text>
      <View style={{alignItems: 'center', marginTop: 150}}>
        <YelGradientBtn
          text="Start the game"
          onClick={() => navigation.navigate('Home')}
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
    color: '#FFFA8A',
    textAlign: 'center',
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
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 24,
  },
});

export default StartGameScreen;
