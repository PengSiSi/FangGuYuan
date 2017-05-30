/**
 * Created by xzh on 17/5/7.
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

export default class SlideHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style = {styles.avaterImgStyle}
                        resizeMode='center' source = {{uri: 'head'}}>
                </Image>
                <View style = {styles.textViewStyle}>
                    <Text style={styles.welcome} style = {styles.textStyle}>
                    用户名: admin
                    </Text>
                    <Text style={styles.welcome} style = {styles.textStyle}>
                        部门: 教务处
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avaterImgStyle: {
        width: 60,
        height: 60,
        marginTop: 60,
        borderRadius: 30,
        justifyContent: 'center'
    },

    textViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    textStyle: {
        fontSize: 16,
        color: 'black',
    }
});