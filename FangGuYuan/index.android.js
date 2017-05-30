/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Login from './Component/Login/login';
import Guide from './Component/Guide/guide';
import HomePage from './../FangGuYuan/Component/Home/homePage';

import { NavigatorIOS } from 'react-native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationIOS
} from 'react-native';

export default class FangGuYuan extends Component {

  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('FangGuYuan', () => FangGuYuan);
