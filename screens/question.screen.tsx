import React, {useEffect, useState} from 'react';
import BottomBar from '../components/BottomBar';
import {NavigationProp} from '@react-navigation/native';
import Settings from '../components/settings';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Bonuses from '../components/Bonuses';
import {YelGradientBtn} from '../components/YelGradientBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuestEnd from '../components/QuestEnd';
import {addPoints, loadPoints} from '../services/pointService';
import Timer from '../services/timerService';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function QuestionScreen({navigation}: Props) {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [questEnd, setQuestEnd] = useState(false);
  const [points, setPoints] = useState(0);

  // Загружаем количество правильных ответов при монтировании компонента
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
  const handleCorrectAnswer = (userAnswer: boolean | null) => {
    if (questions[currentQuestion].answer === userAnswer) {
      const updatedAnswers = correctAnswers + 1;
      setCorrectAnswers(updatedAnswers);
      saveCorrectAnswers(updatedAnswers);
    }
    // Сохраняем новое значение
  };

  const continueOnClick = async () => {
    if (answer !== null) {
      if (currentQuestion === questions.length - 1) {
        handleCorrectAnswer(answer);
        const countAnswers = await AsyncStorage.getItem('correctAnswers');
        const correctAnswers = countAnswers ? parseInt(countAnswers) : 0;
        const pointsValue = correctAnswers * 50;
        setPoints(pointsValue);
        addPoints(pointsValue);
        setQuestEnd(true);
      } else {
        handleCorrectAnswer(answer);
        setCurrentQuestion(prev => (prev < 17 ? prev + 1 : 17));
        setAnswer(null);
      }
    }
  };

  const correctAnswersCount = async (): Promise<string> => {
    try {
      const countQuestions = questions.length;
      const str = correctAnswers + '/' + countQuestions;
      return str;
    } catch (error) {
      console.log('Error retrieving correct answers', error);
      return '0/0'; // В случае ошибки возвращаем 0/0
    }
  };

  return (
    <>
      <SafeAreaView>
        <Bonuses navigation={navigation} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
            marginTop: 70,
            borderColor: '#F2F2F2',
            borderBottomWidth: 2,
            paddingBottom: 14,
          }}>
          <Text style={{color: '#F2F2F2', fontSize: 16, fontWeight: 900}}>
            Quiz: {currentQuestion + 1}
          </Text>
          <Timer />
        </View>

        <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
          <View style={[styles.border, styles.container]}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                {currentQuestion + 1}. {questions[currentQuestion].qustion}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setAnswer(true);
              }}
              style={[styles.answerContainer, styles.border, {marginTop: 25}]}>
              <View
                style={[
                  styles.dot,
                  answer == true && {backgroundColor: '#F2F2F2'},
                ]}></View>
              <Text style={styles.answerText}>Truth</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setAnswer(false);
              }}
              style={[styles.answerContainer, styles.border, {marginTop: 20}]}>
              <View
                style={[
                  styles.dot,
                  answer == false && {backgroundColor: '#F2F2F2'},
                ]}></View>
              <Text style={styles.answerText}>False</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 150}}>
          <YelGradientBtn text={'Continue'} onClick={() => continueOnClick()} />
        </View>

        <View
          style={{
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            marginTop: '198%',
            position: 'absolute',
          }}>
          <BottomBar
            navigation={navigation}
            setSettingsVisible={setSettingsVisible}
          />
        </View>
      </SafeAreaView>
      <Settings visible={settingsVisible} setVisible={setSettingsVisible} />
      <QuestEnd
        answersCount={() => correctAnswersCount()}
        setQuestEnd={setQuestEnd}
        questEnd={questEnd}
        score={points}
        navigation={navigation}
      />
    </>
  );
}

export default QuestionScreen;

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
    width: '111%',
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
    textAlign: 'center',
    marginHorizontal: 140,
    marginVertical: 14,
  },
  answerContainer: {},
  border: {borderColor: '#FFFA8A', borderWidth: 1, borderRadius: 12},
});

const questions = [
  {qustion: 'Mount Everest was first climbed in 1933', answer: false},
  {qustion: 'Mont Blanc is the highest mountain in the Alps.', answer: true},
  {qustion: 'Mount Fuji in  Japan is an active volcano.', answer: true},
  {
    qustion: 'The peaks of the Himalayas continue to grow every year.',
    answer: true,
  },
  {
    qustion: 'The Andes are the highest mountain range in the world.',
    answer: false,
  },
  {
    qustion: 'There are no mountains in Antarctica.',
    answer: false,
  },
  {
    qustion:
      'Kilimanjaro is the highest mountain in Africa and is located in Tanzania.',
    answer: true,
  },
  {
    qustion:
      'The Ural Mountains are the natural border between Europe and Asia.',
    answer: true,
  },
  {
    qustion: 'The highest peak in North America is Mount Aconcagua.',
    answer: false,
  },
  {
    qustion:
      'Mount Elbrus is located in Russia and is the highest point in Europe.',
    answer: true,
  },
  {qustion: 'Mount McKinley changed its name to Denali.', answer: true},
  {qustion: 'The highest volcano in the world is Mount Etna.', answer: false},
  {qustion: 'The Alps stretch across eight countries.', answer: true},
  {
    qustion:
      'On the top of Mount Olympus in Greece, temples were built for the gods in ancient times.',
    answer: false,
  },
  {
    qustion:
      'The oldest mountains in the world are the Appalachian Mountains in North America.',
    answer: true,
  },
  {
    qustion:
      'The sunrise at the top of Kilimanjaro can only be seen every year in December.',
    answer: false,
  },
  {
    qustion:
      'The Himalayas are home to 9 of the 10 highest mountains in the world.',
    answer: true,
  },
  {
    qustion:
      'Mount Vesuvius in Italy is the only active volcano on continental Europe.',
    answer: true,
  },
];
