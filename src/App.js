import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/Home';
import DetailsScreen from './screen/Login.';
import TimerScreen from './screen/Timer';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

function App() {
  const {t, i18n} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={t('Home')}>
        <Stack.Screen name={t('Home')} component={HomeScreen} />
        <Stack.Screen name={t('Details')} component={DetailsScreen} />
        <Stack.Screen name={t('Timer')} component={TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
