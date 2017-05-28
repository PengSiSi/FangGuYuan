/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Login from './Component/Login/login';
import Guide from './Component/Guide/guide';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FangGuYuan extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('FangGuYuan', () => FangGuYuan);
