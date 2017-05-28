import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
       <Image source = {{uri: this.props.tipImageName}} style={styles.iconImageStyle}></Image>
              <Text style={styles.textStyle}>this.props.tipName + '/'/</Text>
                <TextInput
                    ref="inputLoginName"
                    autoFocus={true}
                    underlineColorAndroid="gray"
                    placeholder="请输入用户名"
                    clearTextOnFocus={true}
                    clearButtonMode="while-editing"
                    style={{flex: 1}}
                    onChangeText={(text) => {
                        this.setState({text});
                        this.props.onChangeText(text);
           }
        }></TextInput>
       </View>
    );
  }
}


const LoginStyles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center'
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
        color: '#FFF'
    },

    iconImageStyle: {
      width: 20,
      height: 20,
      marginRight: 10
    }
});