import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  navigation: NavigationProp<any>; // Specify the navigation prop type
  setSettingsVisible: any;
}

function BottomBar({navigation, setSettingsVisible}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('QuestStart')}>
        <Image
          style={styles.btn}
          source={require('../assets/img/quest_icon.png')}
        />
        <Text style={styles.text}>Quest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('QuestionScreen')}>
        <Image
          style={styles.btn}
          source={require('../assets/img/question_icon.png')}
        />
        <Text style={styles.text}>Question</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate('Adventure1')}>
        <Image
          style={styles.btn}
          source={require('../assets/img/adventure_icon.png')}
        />
        <Text style={styles.text}>Adventure</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setSettingsVisible(true)}>
        <Image
          style={styles.btn}
          source={require('../assets/img/settings_icon.png')}
        />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  btnContainer: {alignItems: 'center'},
  btn: {width: 24, height: 24},
  text: {color: '#F2F2F2', fontWeight: '700', marginTop: 8},
});

export default BottomBar;
