import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {options} from '~/constant';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Button} from 'react-native';
import * as RNLocalize from "react-native-localize";

export default function SwitchLanguage(props) {
   
  const {t, i18n} = useTranslation();
  function selectLanguage(){
      if(i18n.language=='en'){
          return 0
      }
      else if (i18n.language=='ru'){
          return 1 
      }
  }
  return (
    <View style={styles.container}>
      <SwitchSelector
        options={options}
        hasPadding
        initial={selectLanguage()}
        onPress={(language) => {
          i18n.changeLanguage(language);
        }}
      />
      
      {props.children}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
