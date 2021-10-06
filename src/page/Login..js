import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyReactNativeForm} from '../components/Form/Form';

export default function DetailsScreen() {
  return <MyReactNativeForm />;
}
