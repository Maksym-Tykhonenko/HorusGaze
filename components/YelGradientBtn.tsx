import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface YelGradientBtnProps {
  text: string; // Explicitly define 'text' as a string type
  onClick: any;
}

export function YelGradientBtn({text, onClick}: YelGradientBtnProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <LinearGradient
        colors={[
          '#BE6D00',
          '#C47A0C',
          '#DDAE3D',
          '#F0D561',
          '#FBEC77',
          '#FFF57F',
        ]}
        style={{borderRadius: 10, width: 180}}
        start={{x: 0.5, y: 1.0}} // Starts the gradient from the bottom (y: 1.0)
        end={{x: 0.5, y: 0.0}} // Ends at the top (y: 0.0) to match 0deg gradient
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Trade Winds',
            margin: 6,
            fontSize: 18,
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
