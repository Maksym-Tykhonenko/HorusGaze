import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  visible: boolean;
  setVisible: any;
}

export default function Settings({visible, setVisible}: any) {
  const [music, setMusic] = useState(50); // Начальное значение громкости
  const [sound, setSound] = useState(50); // Начальное значение громкости

  const increaseMusic = () => {
    setMusic(prevVolume => (prevVolume < 100 ? prevVolume + 10 : 100)); // Увеличить громкость, но не больше 100
  };

  const decreaseMusic = () => {
    setMusic(prevVolume => (prevVolume > 0 ? prevVolume - 10 : 0)); // Уменьшить громкость, но не меньше 0
  };

  const increaseSound = () => {
    setSound(prevVolume => (prevVolume < 100 ? prevVolume + 10 : 100)); // Увеличить громкость, но не больше 100
  };

  const decreaseSound = () => {
    setSound(prevVolume => (prevVolume > 0 ? prevVolume - 10 : 0)); // Уменьшить громкость, но не меньше 0
  };

  return (
    <>
      {visible && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <ImageBackground
            source={require('../assets/img/settings_bg.png')}
            style={{
              width: 264,
              height: 218,
              top: '38%',
              left: '16%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontFamily: 'Trade Winds',
                color: '#F2F2F2',
                fontSize: 24,
                textShadowColor: '#391F00',
                textShadowOffset: {width: 5, height: 5},
                textShadowRadius: 10,
              }}>
              Settings
            </Text>

            <Text
              style={{
                textAlign: 'center',
                marginTop: 13,
                fontFamily: 'Trade Winds',
                color: '#F2F2F2',
                fontSize: 16,
                textShadowColor: '#391F00',
                textShadowOffset: {width: 5, height: 5},
                textShadowRadius: 10,
              }}>
              Music
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={decreaseMusic} style={{zIndex: 1}}>
                <Image
                  style={{width: 38, height: 38, marginLeft: 38}}
                  source={require('../assets/img/btn_minus.png')}
                />
              </TouchableOpacity>

              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={music}
                  onValueChange={value => setMusic(value)}
                  minimumTrackTintColor="transparent" // Прозрачный трек
                  maximumTrackTintColor="transparent"
                  thumbTintColor="transparent" // Скрываем ползунок
                />
                <View
                  style={[
                    styles.customTrack,
                    {width: 150, backgroundColor: '#391F00'}, // Отображаем прогресс
                  ]}
                />
                <View
                  style={[
                    styles.customTrack,
                    {width: `${music}%`, backgroundColor: '#64A53D'}, // Отображаем прогресс
                  ]}
                />
              </View>
              <TouchableOpacity onPress={increaseMusic}>
                <Image
                  style={{width: 38, height: 38}}
                  source={require('../assets/img/btn_plus.png')}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginTop: 0,
                fontFamily: 'Trade Winds',
                color: '#F2F2F2',
                fontSize: 16,
                textShadowColor: '#391F00',
                textShadowOffset: {width: 5, height: 5},
                textShadowRadius: 10,
              }}>
              Sound
            </Text>

            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={decreaseSound} style={{zIndex: 1}}>
                <Image
                  style={{width: 38, height: 38, marginLeft: 38}}
                  source={require('../assets/img/btn_minus.png')}
                />
              </TouchableOpacity>
              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={sound}
                  onValueChange={value => setSound(value)}
                  minimumTrackTintColor="transparent" // Прозрачный трек
                  maximumTrackTintColor="transparent"
                  thumbTintColor="transparent" // Скрываем ползунок
                />
                <View
                  style={[
                    styles.customTrack,
                    {width: 150, backgroundColor: '#391F00'}, // Отображаем прогресс
                  ]}
                />
                <View
                  style={[
                    styles.customTrack,
                    {width: `${sound}%`, backgroundColor: '#64A53D'}, // Отображаем прогресс
                  ]}
                />
              </View>
              <TouchableOpacity onPress={increaseSound}>
                <Image
                  style={{width: 38, height: 38}}
                  source={require('../assets/img/btn_plus.png')}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/img/closeSetting_btn.png')}
                style={{width: 46, height: 46}}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderContainer: {
    width: 130,
    height: 30, // Высота контейнера для толстой линии
    justifyContent: 'center',
    marginHorizontal: -10,
    marginTop: 3,
  },
  slider: {
    width: '100%',
    position: 'absolute',
    height: 30, // Скрытый слайдер (такой же высоты)
    zIndex: 0,
  },
  customTrack: {
    position: 'absolute',
    height: 20, // Толщина трека
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
