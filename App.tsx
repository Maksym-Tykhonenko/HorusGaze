import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WelcomeScreen from './screens/welcome.screen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartGameScreen from './screens/startGame.screen';
import HomeScreen from './screens/home.screen';
import ChooseHero from './screens/chooseHero.screen';
import QuestStart from './screens/questStart.sreen';
import KeyQuest1 from './screens/keyQuest1.screen';
import CrownQuest1 from './screens/crownQest1.screen';
import KeyQuest2 from './screens/keyQuest2.screen';
import LockQuest1 from './screens/lockQuest1.screen';
import KeyQuest3 from './screens/keyQuest3.screen';
import CrownQuest2 from './screens/crownQest2.screen';
import KeyQuest4 from './screens/keyQuest4.screen';
import LockQuest2 from './screens/lockQuest2.screen';
import QuestionScreen from './screens/question.screen';
import Adventure1 from './screens/Adventure/adventure1.screen';
import Adventure2 from './screens/Adventure/adventure2.screen';
import Adventure3 from './screens/Adventure/adventureQuestions3.screen';
import Adventure4 from './screens/Adventure/adventure4.screen';
import Adventure5 from './screens/Adventure/adventure5.screen';
import Adventure6 from './screens/Adventure/adventure6.screen';
import Adventure7 from './screens/Adventure/adventure7.screen';
import Adventure8 from './screens/Adventure/adventure8.screen';
import Adventure9 from './screens/Adventure/adventure9.screen';
import Adventure10 from './screens/Adventure/adventure10.screen';
import Adventure11 from './screens/Adventure/adventure11.screen';
import Adventure12 from './screens/Adventure/adventure12.screen';
import Adventure6_brown from './screens/Adventure/adventure6_brown.screen';
import Adventure7_brown from './screens/Adventure/adventure7_brown.screen';
import Adventure8_brown from './screens/Adventure/adventure8_brown.screen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,

      background: 'transparent',
    },
  };
  const image = require('./assets/img/background.png');

  return (
    <NavigationContainer theme={theme}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{flex: 1}}
        onLoadEnd={() => console.log('Background image loaded successfully!')}
        onError={error => console.error('Error loading image: ', error)}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="StartGame" component={StartGameScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ChooseHero" component={ChooseHero} />
          <Stack.Screen name="QuestStart" component={QuestStart} />
          <Stack.Screen name="KeyQuest1" component={KeyQuest1} />
          <Stack.Screen name="CrownQuest1" component={CrownQuest1} />
          <Stack.Screen name="KeyQuest2" component={KeyQuest2} />
          <Stack.Screen name="LockQuest1" component={LockQuest1} />
          <Stack.Screen name="KeyQuest3" component={KeyQuest3} />
          <Stack.Screen name="CrownQuest2" component={CrownQuest2} />
          <Stack.Screen name="KeyQuest4" component={KeyQuest4} />
          <Stack.Screen name="LockQuest2" component={LockQuest2} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
          <Stack.Screen name="Adventure1" component={Adventure1} />
          <Stack.Screen name="Adventure2" component={Adventure2} />
          <Stack.Screen name="Adventure3" component={Adventure3} />
          <Stack.Screen name="Adventure4" component={Adventure4} />
          <Stack.Screen name="Adventure5" component={Adventure5} />
          <Stack.Screen name="Adventure6" component={Adventure6} />
          <Stack.Screen name="Adventure7" component={Adventure7} />
          <Stack.Screen name="Adventure8" component={Adventure8} />
          <Stack.Screen name="Adventure6_brown" component={Adventure6_brown} />
          <Stack.Screen name="Adventure7_brown" component={Adventure7_brown} />
          <Stack.Screen name="Adventure8_brown" component={Adventure8_brown} />
          <Stack.Screen name="Adventure9" component={Adventure9} />
          <Stack.Screen name="Adventure10" component={Adventure10} />
          <Stack.Screen name="Adventure11" component={Adventure11} />
          <Stack.Screen name="Adventure12" component={Adventure12} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

export default App;
