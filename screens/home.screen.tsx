import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import Bonuses from '../components/Bonuses';
import {YelGradientBtn} from '../components/YelGradientBtn';
import BottomBar from '../components/BottomBar';
import Settings from '../components/settings';
import {getHero, loadHero} from '../services/HeroService';
import {useFocusEffect} from '@react-navigation/native';
import {loadPoints} from '../services/pointService';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function HomeScreen({navigation}: Props): React.JSX.Element {
  const [settingsVisible, setSettingVisible] = useState(false);

  const [hero, setHero] = useState<string>('1');
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
        <View style={{alignItems: 'center', marginTop: 120}}>
          {!loading && getHero(hero)}
          <YelGradientBtn
            text="Choose a Hero"
            onClick={() => navigation.navigate('ChooseHero')}
          />
        </View>
        <BottomBar
          navigation={navigation}
          setSettingsVisible={setSettingVisible}
        />
      </SafeAreaView>
      <Settings visible={settingsVisible} setVisible={setSettingVisible} />
    </>
  );
}

export default HomeScreen;
