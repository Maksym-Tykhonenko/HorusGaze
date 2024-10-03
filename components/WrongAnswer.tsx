import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {YelGradientBtn} from './YelGradientBtn';

interface Props {
  setWrongAnswer: any;
  wrongAnswer: boolean;
}

function WrongAnswer({setWrongAnswer, wrongAnswer}: Props) {
  return (
    <>
      {wrongAnswer && (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <Text
            style={{
              fontFamily: 'Trade Winds',
              color: '#F2F2F2',
              fontSize: 24,
              marginTop: 280,
            }}>
            Wrong answer!
          </Text>
          <Image
            style={{width: 112, height: 112, marginTop: 32, marginBottom: 255}}
            source={require('../assets/img/wrongAnswer.png')}
          />
          <YelGradientBtn
            text="Please try again"
            onClick={() => setWrongAnswer(false)}
          />
        </View>
      )}
    </>
  );
}

export default WrongAnswer;
