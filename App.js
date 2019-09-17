/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput placeholder="Add your memo" style={style.inputField} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    padding: 10,
    width: 200,
  },
});
