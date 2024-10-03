import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure10({navigation}: Props) {
  const [answer, setAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onClickContinue = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(prevValue =>
        prevValue < questions.length - 1 ? prevValue + 1 : questions.length - 1,
      );
    else navigation.navigate('Adventure11');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Bonuses navigation={navigation} />

      <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
        <View style={[styles.border, styles.container]}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Which of the facts is true?</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setAnswer(questions[currentQuestion].answer1);
            }}
            style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
            <Text style={styles.answerText}>
              {questions[currentQuestion].answer1}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setAnswer(questions[currentQuestion].answer2);
            }}
            style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
            <Text style={styles.answerText}>
              {questions[currentQuestion].answer2}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setAnswer(questions[currentQuestion].answer3);
            }}
            style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
            <Text style={styles.answerText}>
              {questions[currentQuestion].answer3}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setAnswer(questions[currentQuestion].answer4);
            }}
            style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
            <Text style={styles.answerText}>
              {questions[currentQuestion].answer4}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setAnswer(questions[currentQuestion].answer5);
            }}
            style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
            <Text style={styles.answerText}>
              {questions[currentQuestion].answer5}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 80}}>
        <YelGradientBtn text="Start" onClick={() => onClickContinue()} />
      </View>
    </SafeAreaView>
  );
}

const questions = [
  {
    answer1: 'Makalu',
    answer2: 'Everest (Chomolungma)',
    answer3: 'Kanchenjunga',
    answer4: 'K2 (Chogori)',
    answer5: 'Lhotse',
  },
  {
    answer1: 'Annapurna I',
    answer2: 'Dhaulagiri',
    answer3: 'Nanga Parbat ',
    answer4: 'MCho Oyuakalu',
    answer5: 'Manaslu ',
  },
];

const styles = StyleSheet.create({
  questionText: {
    color: '#F2F2F2',
    fontFamily: 'Trade Winds',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 12,
  },
  questionContainer: {
    backgroundColor: '#3F1B08',
    position: 'absolute',
    width: '119%',
    top: -1,
    left: -2,
    borderRadius: 12,
  },
  container: {
    marginTop: 10,
    paddingBottom: 20,
    paddingTop: 70,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '90%',
  },
  dot: {
    borderColor: '#FFFA8A',
    borderWidth: 1,
    borderRadius: 12,
    width: 20,
    height: 20,
    position: 'absolute',
    top: '30%',
    left: 20,
  },
  answerText: {
    color: '#F2F2F2',
    fontFamily: 'Trade Winds',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 14,
  },
  answerContainer: {},
  border: {borderColor: '#FFFA8A', borderWidth: 1, borderRadius: 12},
});

export default Adventure10;
