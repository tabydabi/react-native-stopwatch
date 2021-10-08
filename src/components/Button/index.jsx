import React from 'react';
import FastImage from 'react-native-fast-image';
import {ButtonText, ButtoContainer, styles} from './styles';

export const ButtonB = ({onPress, title, source}) => {
  return (
    <ButtoContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
      <FastImage style={styles.image} source={source} />
    </ButtoContainer>
  );
};
