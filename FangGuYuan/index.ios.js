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

import {Actions, Scene, Router} from 'react-native-router-flux';
import AppNav from './Component/Home/AppNav';

export default class FangGuYuan extends Component {

  render() {
    return (
      <AppNav/>
    );
  }
}

AppRegistry.registerComponent('FangGuYuan', () => FangGuYuan);
