import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function HomeScreen({navigation}) {
  const {t, i18n} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={t('toDetails')}
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title={t('toTimer')}
        onPress={() => navigation.navigate('Timer')}
      />
    </View>
  );
}
