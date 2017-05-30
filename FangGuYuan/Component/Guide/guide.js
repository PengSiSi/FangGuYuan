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
  TouchableOpacity,
} from 'react-native';

import Util from './../Util/util';
import Login from './../Login/login';

import { NavigatorIOS } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

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
    const { navigate } = this.props.navigation;
        navigate('LoginScreen');
  }

   // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到登录页
        setTimeout(()=>{
            // 页面的切换
        const { navigate } = this.props.navigation;
        navigate('LoginScreen');
        }, 1500);
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
