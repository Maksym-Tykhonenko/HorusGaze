import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Bonuses from '../../components/Bonuses';
import {YelGradientBtn} from '../../components/YelGradientBtn';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {getHero, loadHero} from '../../services/HeroService';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Adventure9({navigation}: Props) {
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
            Our task is to arrange the names of the mountains in order of their
            height. Check out the list and arrange the mountains from highest to
            lowest. This challenge will help test your geographical knowledge
            and attention to detail. Be precise, because only the right sequence
            will allow you to go further.
          </Text>
        </View>

        <YelGradientBtn
          text="Start"
          onClick={() => navigation.navigate('Adventure10')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Adventure9;
