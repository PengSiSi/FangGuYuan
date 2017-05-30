/**
 * Created by xzh on 17/5/7.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Util from './../Util/util';

export default class SlideBottomView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.exitLoginStyle}
                                underlayColor='transparent'
                                onPress={()=>this.props.logoutDidClick}>
                    <Text style={styles.exitLoginTextStyle}>退出登录</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        backgroundColor: 'green',
    },

    exitLoginTextStyle: {
        justifyContent: 'center',
        fontSize: 17,
        alignSelf: 'center',
        color: 'green',
        borderRadius: 5
    },

    exitLoginStyle: {
        height: 40,
        backgroundColor: 'white',
        margin: 40,
        marginTop: 60,
        borderRadius: 8,
        justifyContent: 'center',
    },
});