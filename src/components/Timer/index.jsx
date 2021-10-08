/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {styles} from './styles';
import {ButtonB} from '~/components/Button';
import {useTranslation} from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';
import {options} from '~/constant';
import SwitchLanguage from '~components/SwitchSelector';

export default function Timer() {
  const {t, i18n} = useTranslation();
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(interv);
  };
  const reset = () => {
    clearInterval(interv);
    setTime({ms: 0, s: 0, m: 0, h: 0});
  };
  let updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;
  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs += 2;
    return setTime({ms: updateMs, s: updateS, m: updateM, h: updateH});
  };

  return (
    <View>
      <View style={styles.timerProgress}>
        <Progress.Pie progress={time.h / 24} size={50} />
        <Progress.Pie progress={time.m / 60} size={50} />
        <Progress.Pie progress={time.s / 60} size={50} />
        <Progress.Pie progress={time.ms / 100} size={50} />
      </View>
      <View style={styles.timer}>
        <Text>{time.h >= 10 ? time.h : '0' + time.h + ' : '}</Text>
        <Text>{time.m >= 10 ? time.m : '0' + time.m + ' : '}</Text>
        <Text>{time.s >= 10 ? time.s : '0' + time.s + ' : '}</Text>
        <Text>{time.ms >= 10 ? time.ms : '0' + time.ms}</Text>
      </View>
      <View style={styles.button}>
        <ButtonB title={t('Start')} onPress={start} />
        <ButtonB
          title={t('Stop')}
          onPress={stop}
          source={{uri: 'https://unsplash.it/400/400?image=5'}}
        />
        <ButtonB
          title={t('Reset')}
          onPress={reset}
          source={{uri: 'https://unsplash.it/400/400?image=5'}}
        />
      </View>
    </View>
  );
}
