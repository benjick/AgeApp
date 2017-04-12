import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { observer, inject } from 'mobx-react';
import { LinearGradient } from 'expo';
import DatePicker from './Datepicker';

const Main = ({ store }) => (
  <LinearGradient
    colors={['#4776e6', '#8E54E9']}
    style={styles.container}
  >
    <StatusBar
      barStyle="light-content"
    />
    <View style={styles.age}>
      <Text style={styles.ageText}>{store.age}</Text>
    </View>
    <View>
      <DatePicker />
    </View>
  </LinearGradient>
);

export default inject('store')(observer(Main));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  age: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageText: {
    fontSize: 100,
    backgroundColor: 'transparent',
    color: '#fff',
  },
});
