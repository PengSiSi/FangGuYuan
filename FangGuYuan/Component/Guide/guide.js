/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Util from './../Util/util';
import Login from './../Login/login';

export default class Guide extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity onPress = {this.jumpLogginPage}>
            <Image source = {{uri:'startup_homepage'}} 
                  resizeMode = 'cover' 
                  style = {styles.imageStyle}>
            </Image>
        </TouchableOpacity>
      </View>
    );
  }

  jumpLogginPage() {
    alert('进入登录页面');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40
  },

  imageStyle: {
    flex: 1,
    width: Util.size.width,
    height: Util.size.height
  }
});
