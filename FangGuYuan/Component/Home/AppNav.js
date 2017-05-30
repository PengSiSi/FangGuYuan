
import React, { Component } from 'react';

import {
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import Home from './homeList';
import Login from './../Login/login';
import Slide from './../Side/side';
import HomePage from './homePage';
import Guide from './../Guide/guide';
import HomeList from './homeList';

const HomeStack = StackNavigator({
  HomeScreen: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: '首页',
      headerLeft: <Text
        onPress={() => {
          navigation.navigate('DrawerOpen');
        }}
      >
      <Image source = {{uri: 'account'}} style = {styles.leftItemStyle}></Image>
      </Text>,
    }),
  },
});

const LoginStack = StackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: '',
    },
  },
});

const HomeListStack = StackNavigator({
  HomeListScreen: {
    screen: HomeList,
    navigationOptions: {
      title: '',
    },
  },
});

const GuideStack = StackNavigator({
  GuideScreen: {
    screen: Guide,
    navigationOptions: {}
  },
});

const AppNav = DrawerNavigator({

  Login: {
    screen: Login,  // 注意登录页没有导航栏
  },
  Home: {
    screen: HomeStack}
},
{
    drawerWidth: 300, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: Slide,  // 自定义抽屉组件
    contentOptions: {
    //   initialRouteName: Home, // 默认页面组件
    //   activeTintColor: 'white',  // 选中文字颜色
    //   activeBackgroundColor: '#ff8500', // 选中背景颜色
    //   inactiveTintColor: '#666',  // 未选中文字颜色
    //   inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式

      }
    }
});

const styles = StyleSheet.create({
    leftItemStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    }
});

export default AppNav;