
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
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import LogDetail from './logDetail';
import Util from './../Util/util';
import SelectButton from './selectButton';

export default class Login extends Component {

   constructor(props) {
     super(props);
     this.userName = ""; // 用户名
     this.password = ""; // 密码
     this.state = {
     rememberPassword : false , // 记住密码
     autoLoggin : false  // 自动登录
     }
 }

  render() {

      var rememberImgName = this.state.rememberPassword 
       ? 'not_click': 'click';
      var autoLogginimgName = this.state.rememberPassword ? 'not_click': 'click';

        return (
          <View style={styles.container}>
           <View>
              <Image source={{uri: 'logo'}} resizeMode = 'center' style={styles.imgStyle}>
              </Image>
          </View>
            <View style={[styles.item, styles.editViewStyle]}>
             <Image source = {{uri: 'account'}} style = {styles.iconImageStyle}></Image>
             <Text style={styles.textStyle}>账户 /</Text>
             <TextInput
                    ref="inputLoginName"
                    autoFocus={true}
                    underlineColorAndroid="gray"
                    placeholder="请输入用户名"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                    style={{flex: 1}}
                    onChangeText={(input) => this.setState({username: input})}>
              </TextInput>
            </View>
            <View style={styles.item}>
            
              <Image source = {{uri: 'password'}} style = {styles.iconImageStyle}></Image>
              <Text style={styles.textStyle}>密码 /</Text>
                <TextInput
                    ref="inputLoginPwd"
                    underlineColorAndroid="gray"
                    placeholder="请输入密码"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                    style={{flex: 1}}
                    onChangeText={(input) => this.setState({userpwd: input})}></TextInput>
            </View>
            <View style = {styles.selectButtons}>

              <SelectButton name = '记住密码' imageName = {rememberImgName} onPressCallback = {this.remenberPasswordClick.bind(this
                )}>
              </SelectButton>
              <SelectButton name = '自动登录' imageName = {autoLogginimgName} onPressCallback = {this.autoLogginClick.bind(this)}>
              </SelectButton>
            </View>
            <TouchableHighlight style={styles.login}
                                underlayColor='transparent'
                                onPress={()=>this.loginInMainpage()} style = {styles.loginButtonView}>
                <Text style={styles.loginText}>登录</Text>
            </TouchableHighlight>
        </View>
        )
    }

    remenberPasswordClick() {
      // alert('记住密码');
      this.setState = ({rememberPassword: !this.state.rememberPassword});
    }
    autoLogginClick() {
      // alert('自动登录');
      this.setState = ({autoLoggin: !this.state.autoLoggin});
    }


  loginInMainpage() {
    // alert('登录按钮被点击');
    const { navigator } = this.props;
        if (navigator) {
          navigator.push({
            name : 'LoginSuccess',
            component : LogDetail,
          });
        }
  }

   setLoginName(input) {
        this.setState = {inputName: input}
    }

    setLoginPwd(input) {
        this.setState = {inputPwd: input}
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imgStyle: {
      flexDirection: 'row',
      height:100,
      width:Util.size.width * 0.8,
      marginTop:Util.size.height * 0.2,
      marginRight: 20,
      marginLeft: 20,
      justifyContent: 'center',
     },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    textStyle: {
        fontSize: 16,
        color: 'black',
        marginRight: 10
    },
    login: {
        height: 40,
        backgroundColor: 'green',
        margin: 20,
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 17,
        alignSelf: 'center',
        color: '#FFF',
        borderRadius: 5
    },

  loginButtonView: {
      margin: 10,
      height:50,
      backgroundColor: 'green',
      borderRadius:8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    iconImageStyle: {
      width: 20,
      height: 20,
      marginRight: 10
    },

    editViewStyle: {
      marginTop: 20
    },

    selectButtons: {
      flexDirection: 'row',
      marginLeft: 20,
      marginTop: 30     
    }
})