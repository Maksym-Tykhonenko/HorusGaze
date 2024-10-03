import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import Bonuses from '../components/Bonuses';
import {YelGradientBtn} from '../components/YelGradientBtn';
import WrongAnswer from '../components/WrongAnswer';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function LockQuest1({navigation}: Props): React.JSX.Element {
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Bonuses navigation={navigation} />

        <View style={{alignItems: 'center', marginTop: 90}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setWrongAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../assets/img/lock_shadow1.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setWrongAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../assets/img/lock_shadow2.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCorrectAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../assets/img/lock_shadow3.png')}
              />
              {correctAnswer && (
                <Image
                  style={[styles.key, {position: 'absolute'}]}
                  source={require('../assets/img/lock3.png')}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 60, marginBottom: 170}}>
            <Image
              style={styles.key}
              source={require('../assets/img/lock3.png')}
            />
          </View>

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
              To continue the quest, you need to choose the right lock.
            </Text>
          </View>

          {correctAnswer && (
            <YelGradientBtn
              text="Continue"
              onClick={() => navigation.navigate('CrownQuest2')}
            />
          )}
        </View>
      </SafeAreaView>
      <WrongAnswer setWrongAnswer={setWrongAnswer} wrongAnswer={wrongAnswer} />
    </>
  );
}

const styles = StyleSheet.create({
  key: {width: 64, height: 78, marginHorizontal: 20},
});

export default LockQuest1;
