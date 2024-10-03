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
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import WrongAnswer from '../../components/WrongAnswer';
import QuestEnd from '../../components/QuestEnd';
import {addPoints} from '../../services/pointService';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure12({navigation}: Props): React.JSX.Element {
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [questEnd, setQuestEnd] = useState<boolean>(false);

  const onEndQuest = () => {
    addPoints(1000);
    setQuestEnd(true);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Bonuses navigation={navigation} />

        <View style={{alignItems: 'center', marginTop: 90}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setWrongAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../../assets/img/key_shadow1.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setWrongAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../../assets/img/key_shadow2.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCorrectAnswer(true)}>
              <Image
                style={{width: 44, height: 150}}
                source={require('../../assets/img/key_shadow3.png')}
              />
              {correctAnswer && (
                <Image
                  style={[styles.key, {position: 'absolute', left: -25}]}
                  source={require('../../assets/img/key1.png')}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setWrongAnswer(true)}>
              <Image
                style={styles.key}
                source={require('../../assets/img/key_shadow4.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 60, marginBottom: 50}}>
            <Image
              style={styles.key}
              source={require('../../assets/img/key1.png')}
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
              To continue the quest, you need to open a chest with the following
              clue. In order to open it, you need to choose the right key.
            </Text>
          </View>

          {correctAnswer && (
            <YelGradientBtn text="Continue" onClick={() => onEndQuest()} />
          )}
        </View>
      </SafeAreaView>
      <QuestEnd
        answersCount={''}
        setQuestEnd={setQuestEnd}
        questEnd={questEnd}
        score={500}
        navigation={navigation}
      />
      <WrongAnswer setWrongAnswer={setWrongAnswer} wrongAnswer={wrongAnswer} />
    </>
  );
}

const styles = StyleSheet.create({
  key: {height: 120, width: 44, marginHorizontal: 24},
});

export default Adventure12;
