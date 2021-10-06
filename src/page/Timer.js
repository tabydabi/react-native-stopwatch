import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timer from '../components/Timer/Timer';

export default function TimerScreen() {
  return <Timer />;
}
