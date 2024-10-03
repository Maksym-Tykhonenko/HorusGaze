import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {loadPoints} from '../services/pointService';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
}

function Bonuses({navigation}: Props): React.JSX.Element {
  const [points, setPoints] = useState<string>();
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const p = await loadPoints(); // Загружаем сохранённого героя
          setPoints(p); // Обновляем состояние
        } catch (error) {
          console.log('Error loading hero and points', error);
        } finally {
          setLoading(false); // Завершаем загрузку
        }
      };
      fetchData();
    }, []),
  );

  return (
    <>
      <View style={styles.mainViev}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/img/home_icon.png')}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={require('../assets/img/point_icon.png')}
            style={styles.starIcon}
          />
          {!loading && <Text style={styles.starText}>{points}</Text>}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainViev: {
    marginHorizontal: 24,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeIcon: {width: 36, height: 36},
  starIcon: {width: 84, height: 32},
  starText: {
    position: 'absolute',
    color: '#F2F2F2',
    fontFamily: 'Trade Winds',
    fontSize: 12,
    left: '50%',
    top: '22%',
  },
});

export default Bonuses;
