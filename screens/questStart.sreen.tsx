import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import Bonuses from '../components/Bonuses';
import {YelGradientBtn} from '../components/YelGradientBtn';
import BottomBar from '../components/BottomBar';
import Slider from '@react-native-community/slider';
import Settings from '../components/settings';
import {getHero, loadHero} from '../services/HeroService';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function QuestStart({navigation}: Props): React.JSX.Element {
  const [hero, setHero] = useState<string>();
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchHeroAndPoints = async () => {
        try {
          const heroValue = await loadHero(); // Загружаем сохранённого героя
          setHero(heroValue); // Обновляем состояние
        } catch (error) {
          console.log('Error loading hero and points', error);
        } finally {
          setLoading(false); // Завершаем загрузку
        }
      };
      fetchHeroAndPoints(); // Вызываем функцию при фокусе
    }, []), // Зависимость пустая, чтобы хук вызывался при каждом фокусе экрана
  );
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Bonuses navigation={navigation} />

        <View style={{alignItems: 'center', marginTop: 90}}>
          {!loading && getHero(hero)}

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
              Congratulations on the beginning of the adventure! You are at the
              first stop of our quest. Your mission is to overcome all obstacles
              and reach the main prize. To move on, click on the continue
              button.
            </Text>
          </View>

          <YelGradientBtn
            text="Start"
            onClick={() => navigation.navigate('KeyQuest1')}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default QuestStart;
