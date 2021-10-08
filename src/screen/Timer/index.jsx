import * as React from 'react';
import SwitchLanguage from '~components/SwitchSelector';
import Timer from '../../components/Timer';

export default function TimerScreen() {
  return (
    <SwitchLanguage>
      <Timer />
    </SwitchLanguage>
  );
}
