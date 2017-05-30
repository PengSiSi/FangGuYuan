import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={styles.containStyle}>
        <Image source = {{uri: this.props.imageName}} style = {styles.selectImgStyle}></Image>
        <Text style={styles.textStyle} >
            {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({

    containStyle: {
        flex: 1,
        flexDirection: 'row',
        
    },

    selectImgStyle: {
        width: 15,
        height: 15,
        margin: 3,
        alignSelf: 'center'  // 设置两个子控件对齐,先设置父级属性为 row
    },

    textStyle: {
        fontSize: 16,
        color: 'green',
        marginLeft: 10 ,
        alignSelf: 'center'
    }
});