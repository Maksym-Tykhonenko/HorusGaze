import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import Bonuses from '../components/Bonuses';
import {YelGradientBtn} from '../components/YelGradientBtn';
import {useFocusEffect} from '@react-navigation/native';
import {getHero, loadHero, saveHero} from '../services/HeroService';
interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function ChooseHero({navigation}: Props): React.JSX.Element {
  const [hero, setHero] = useState(0);
  const [loadingHero, setLoadingHero] = useState(true);

  // Обновляем состояние при возвращении на экран
  useFocusEffect(
    React.useCallback(() => {
      const fetchHero = async () => {
        const heroValue = await loadHero(); // Загружаем сохранённого героя
        setHero(heroValue); // Обновляем состояние
        setLoadingHero(false);
      };
      fetchHero();
    }, []), // Зависимость пустая, чтобы хук вызывался при каждом фокусе экрана
  );

  const onChangeHero = () => {
    saveHero(hero);
    console.log(hero);
    navigation.navigate('Home');
  };

  const nextHero = () => {
    setHero(prevHero => (prevHero < 3 ? prevHero + 1 : 3));
  };

  const prevHero = () => {
    setHero(prevHero => (prevHero > 1 ? prevHero - 1 : 1));
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Bonuses navigation={navigation} points={'200'} />

        <View style={{alignItems: 'center', marginTop: 40}}>
          {getHero(hero.toString())}

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.heroBtnContainer}
              onPress={() => prevHero()}>
              <Image
                style={styles.heroBtn}
                source={require('../assets/img/prevHero_btn.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.heroWraper,
                {
                  marginHorizontal: 5,
                  paddingHorizontal: 20,
                },
              ]}>
              <Image
                source={require('../assets/img/hero1.png')}
                style={{width: 60, height: 160, marginBottom: 20}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.heroWraper,
                {
                  marginHorizontal: 5,
                  paddingHorizontal: 20,
                },
              ]}>
              <Image
                source={require('../assets/img/hero2.png')}
                style={{width: 60, height: 160, marginBottom: 20}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.heroWraper,
                {
                  paddingHorizontal: 12,
                  marginHorizontal: 5,
                },
              ]}>
              <Image
                source={require('../assets/img/hero3.png')}
                style={{width: 76, height: 160, marginBottom: 20}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.heroBtnContainer}
              onPress={() => nextHero()}>
              <Image
                style={styles.heroBtn}
                source={require('../assets/img/nextHero_btn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <YelGradientBtn text="Continue" onClick={() => onChangeHero()} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  heroBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroBtn: {
    width: 24,
    height: 24,
  },
  heroWraper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#FFFA8A',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
  },
});

export default ChooseHero;
function UseEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
