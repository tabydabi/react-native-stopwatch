import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ButtoContainer = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  border: 2px solid black;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    marginTop: -20,
  },
});
