import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import SwitchLanguage from '~components/SwitchSelector';

export default function HomeScreen({navigation}) {
  const {t, i18n} = useTranslation();

  return (
    <SwitchLanguage>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title={t('Go to Details')}
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title={t('Go to Timer')}
          onPress={() => navigation.navigate('Timer')}
        />
      </View>
    </SwitchLanguage>
  );
}
