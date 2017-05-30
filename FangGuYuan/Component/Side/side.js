/**
 * Created by xzh on 17/5/7.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import SlideHeaderView from './slideHeaderView';
import SlideBottomView from './slideBottom';
import Util from './../Util/util';

export default class Side extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SlideHeaderView style = {styles.slideHeaderViewStyle}>
                </SlideHeaderView>
                <SlideBottomView style = {styles.slideHeaderViewStyle}>
                </SlideBottomView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    slideHeaderViewStyle: {
        // height: 180,
    },

    slideBottomViewStyle: {
        height: Util.size.height - 120
    }
   
});