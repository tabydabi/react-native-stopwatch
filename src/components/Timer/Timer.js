/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Timer() {
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
    <View style={styles.container}>
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
        <Button title="Start" onPress={start} />
        <Button title="Stop" onPress={stop} />
        <Button title="End" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
  },
  timerProgress: {
    flexDirection: 'row',
  },
});
