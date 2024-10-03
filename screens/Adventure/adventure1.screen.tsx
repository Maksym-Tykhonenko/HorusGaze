import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {getHero, loadHero} from '../../services/HeroService';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure1({navigation}: Props) {
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
    <SafeAreaView style={{flex: 1}}>
      <Bonuses navigation={navigation} />

      <View style={{alignItems: 'center', marginTop: 80}}>
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
            At the beginning of the quest, new adventures and unforgettable
            impressions will open up before you! You will find yourself in the
            center of an intriguing story, where every riddle and clue will
            bring you closer to solving and winning. Your task is to find
            solutions to all challenges.
          </Text>
        </View>

        <YelGradientBtn
          text="Continue"
          onClick={() => navigation.navigate('Adventure2')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Adventure1;
