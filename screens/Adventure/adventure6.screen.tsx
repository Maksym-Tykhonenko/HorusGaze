import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure6({navigation}: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Bonuses navigation={navigation} />

      <View style={{alignItems: 'center', marginTop: 80}}>
        <Image
          source={require('../../assets/img/draw1_blue.png')}
          style={{width: 180, height: 180, marginBottom: 230}}
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
          onClick={() => navigation.navigate('Adventure6_brown')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Adventure6;
