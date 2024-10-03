import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {YelGradientBtn} from './YelGradientBtn';

interface Props {
  setQuestEnd: any;
  questEnd: boolean;
  navigation: NavigationProp<any>; // Specify the navigation prop type
  score: any;
  answersCount: any;
}

function QuestEnd({questEnd, score, navigation, answersCount}: Props) {
  const [answers, setAnswers] = useState<string>(''); // Initial state

  // Fetch answers count when component mounts
  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const result = await answersCount(); // Await the result from async function
        setAnswers(result);
      } catch (error) {}
    };

    fetchAnswers();
  }, [answersCount]);

  try {
    return (
      <>
        {questEnd && (
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
              Wonderfully!
            </Text>

            <ImageBackground
              style={{
                width: 174,
                height: 112,
                marginTop: 32,
                alignItems: 'center', // Center the text horizontally
                paddingTop: 23,
              }}
              source={require('../assets/img/endQuest.png')}>
              <Text
                style={{
                  fontFamily: 'Trade Winds',
                  fontSize: 16, // Make the font size more reasonable
                  color: '#441500', // Ensure text color contrasts with background
                  textAlign: 'center', // Center the text inside the ImageBackground
                  overflow: 'hidden', // Prevent text overflow
                }}>
                {answers}
              </Text>
            </ImageBackground>

            <View
              style={{
                marginBottom: 210,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Trade Winds',
                  color: '#F2F2F2',
                }}>
                + {score}
              </Text>
              <ImageBackground
                style={{width: 16, height: 14, marginLeft: 4}}
                source={require('../assets/img/star_icon.png')}
              />
            </View>
            <YelGradientBtn
              text="Continue"
              onClick={() => navigation.navigate('Home')}
            />
          </View>
        )}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

export default QuestEnd;
