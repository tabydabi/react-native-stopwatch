import * as React from 'react';
import SwitchLanguage from '~components/SwitchSelector';
import {MyReactNativeForm} from '../../form';

export default function DetailsScreen() {
  return (
    <SwitchLanguage>
      <MyReactNativeForm />
    </SwitchLanguage>
  );
}
