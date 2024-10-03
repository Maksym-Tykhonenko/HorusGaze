import React, {useEffect, useRef} from 'react';
import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

function Adventure6_brown({navigation}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('Component mounted, starting fade animation');
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      console.log('Fade animation completed');
    });
  }, [fadeAnim]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Bonuses navigation={navigation} />

      <View style={{alignItems: 'center', marginTop: 80}}>
        <Animated.Image
          source={require('../../assets/img/draw1_brown.png')}
          style={{
            width: 180,
            height: 180,
            marginBottom: 230,
            opacity: fadeAnim,
          }}
        />

        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderColor: '#FFFA8A',
            borderWidth: 1,
            borderRadius: 12,
            marginHorizontal: 10,
            marginBottom: 30,
          }}>
          <Text style={{color: '#F2F2F2', margin: 12}}>
            Do you need to draw an element while avoiding lifting your finger
            and overlapping lines?
          </Text>
        </View>

        <YelGradientBtn
          text="Start"
          onClick={() => navigation.navigate('Adventure7')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Adventure6_brown;
