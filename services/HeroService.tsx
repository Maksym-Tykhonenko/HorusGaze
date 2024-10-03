import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';

export const loadHero = async (): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem('Hero');
    if (value !== null) {
      return value; // Return saved hero
    } else {
      // If no hero is saved, set and return the default hero
      await AsyncStorage.setItem('Hero', '1');
      return '1';
    }
  } catch (error) {
    console.log('Error loading hero from storage', error);
    return '1'; // Return default hero on error
  }
};

export const saveHero = async (selectedHero: number) => {
  try {
    await AsyncStorage.setItem('Hero', selectedHero.toString());
  } catch (error) {
    console.log('Error saving hero', error);
  }
};

export const getHero = (hero: string | null): JSX.Element => {
  console.log(hero);
  switch (hero) {
    case '1':
      return (
        <Image
          source={require('../assets/img/hero1.png')}
          style={{width: 142, height: 362, marginBottom: 20}}
        />
      );
    case '2':
      return (
        <Image
          source={require('../assets/img/hero2.png')}
          style={{width: 128, height: 362, marginBottom: 20}}
        />
      );
    case '3':
      return (
        <Image
          source={require('../assets/img/hero3.png')}
          style={{width: 172, height: 362, marginBottom: 20}}
        />
      );
    default:
      return (
        <Image
          source={require('../assets/img/hero1.png')}
          style={{width: 142, height: 362, marginBottom: 20}}
        />
      );
  }
};
