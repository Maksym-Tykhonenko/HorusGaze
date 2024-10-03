import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadPoints = async (): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem('Points');
    if (value !== null) {
      return value; // Return saved hero
    } else {
      // If no hero is saved, set and return the default hero
      await AsyncStorage.setItem('Points', '0');
      return '0';
    }
  } catch (error) {
    console.log('Error loading hero from storage', error);
    return '0'; // Return default hero on error
  }
};

export const addPoints = async (points: number) => {
  try {
    let value = await AsyncStorage.getItem('Points');
    let currentPoints = value ? parseInt(value) : 0;
    currentPoints += points;

    await AsyncStorage.setItem('Points', currentPoints.toString());
  } catch (error) {
    console.log('Error adding points', error);
  }
};
