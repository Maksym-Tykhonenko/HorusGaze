import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuestEnd from '../../components/QuestEnd';
import WrongAnswer from '../../components/WrongAnswer';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure3({navigation}: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [answer, setAnswer] = useState<string | null>(null);
  const [questEnd, setQuestEnd] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  useEffect(() => {
    const loadCorrectAnswers = async () => {
      try {
        const value = await AsyncStorage.getItem('correctAnswers');
        if (value !== null) {
          setCorrectAnswers(0);
        }
      } catch (error) {
        console.log('Ошибка при загрузке данных', error);
      }
    };

    loadCorrectAnswers();
  }, []);

  // Сохраняем количество правильных ответов в локальное хранилище
  const saveCorrectAnswers = async (newCorrectAnswers: number) => {
    try {
      await AsyncStorage.setItem(
        'correctAnswers',
        newCorrectAnswers.toString(),
      );
      console.log(await AsyncStorage.getItem('correctAnswers'));
    } catch (error) {
      console.log('Ошибка при сохранении данных', error);
    }
  };

  // Обрабатываем правильный ответ
  const handleCorrectAnswer = (userAnswer: string | null) => {
    if (currentQuestion < questions.length - 1) {
      if (questions[currentQuestion].answer !== userAnswer) {
        setWrongAnswer(true);
      } else if (questions[currentQuestion].answer === userAnswer) {
        const updatedAnswers = correctAnswers + 1;
        setCorrectAnswers(updatedAnswers);
        saveCorrectAnswers(updatedAnswers);
        setCurrentQuestion(prev => (prev < 3 ? prev + 1 : 3));
      }
    } else if (currentQuestion === questions.length - 1) {
      if (questions[currentQuestion].answer !== userAnswer) {
        setWrongAnswer(true);
      } else if (questions[currentQuestion].answer === userAnswer) {
        const updatedAnswers = correctAnswers + 1;
        setCorrectAnswers(updatedAnswers);
        saveCorrectAnswers(updatedAnswers);
        navigation.navigate('Adventure4');
      }
    }
  };

  const continueOnClick = () => {
    if (answer !== null) {
      handleCorrectAnswer(answer);
      setAnswer(null);
    }
  };

  const correctAnswersCount = async (): Promise<string> => {
    const countAnswers = await AsyncStorage.getItem('correctAnswers');
    const countQuestions = questions.length;

    return `${countAnswers ?? 0}/${countQuestions}`;
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Bonuses navigation={navigation} />

        <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
          <View style={[styles.border, styles.container]}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                Which of the facts is true?
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setAnswer(questions[currentQuestion].firstAnswer);
              }}
              style={[styles.answerContainer, styles.border, {marginTop: 25}]}>
              <View
                style={[
                  styles.dot,
                  answer == questions[currentQuestion].firstAnswer && {
                    backgroundColor: '#F2F2F2',
                  },
                ]}></View>
              <Text style={styles.answerText}>
                {questions[currentQuestion].firstAnswer}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setAnswer(questions[currentQuestion].secondAnswer);
              }}
              style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
              <View
                style={[
                  styles.dot,
                  answer == questions[currentQuestion].secondAnswer && {
                    backgroundColor: '#F2F2F2',
                  },
                ]}></View>
              <Text style={styles.answerText}>
                {questions[currentQuestion].secondAnswer}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 230}}>
          <YelGradientBtn text="Continue" onClick={() => continueOnClick()} />
        </View>

        <QuestEnd
          answersCount={correctAnswersCount}
          setQuestEnd={setQuestEnd}
          questEnd={questEnd}
          score={500}
          navigation={navigation}
        />
      </SafeAreaView>
      <WrongAnswer setWrongAnswer={setWrongAnswer} wrongAnswer={wrongAnswer} />
    </>
  );
}

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
    width: '114%',
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
    textAlign: 'left',
    marginLeft: 50,
    marginRight: 14,
    marginVertical: 14,
  },
  answerContainer: {},
  border: {borderColor: '#FFFA8A', borderWidth: 1, borderRadius: 12},
});

const questions = [
  {
    firstAnswer: 'Kilimanjaro is the highest mountain in Africa.',
    secondAnswer: 'Mount McKinley is the highest peak in South America',
    answer: 'Kilimanjaro is the highest mountain in Africa.',
  },

  {
    firstAnswer: 'Ora Vinson Massif is the highest mountain in Antarctica.',
    secondAnswer: 'Aconcagua is the highest mountain in Europe.',
    answer: 'Ora Vinson Massif is the highest mountain in Antarctica.',
  },

  {
    firstAnswer: 'Mount Etna is the highest active mountain in Europe.',
    secondAnswer:
      'The Alps stretch through France, Italy, Switzerland, Austria and Germany.',
    answer:
      'The Alps stretch through France, Italy, Switzerland, Austria and Germany.',
  },

  {
    firstAnswer: 'The Himalayas are the longest mountain range in the world.',
    secondAnswer: 'The Urals divide Europe and Asia.',
    answer: 'The Urals divide Europe and Asia.',
  },
];

export default Adventure3;
