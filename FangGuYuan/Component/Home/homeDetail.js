/**
 * Created by xzh on 17/5/7.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import HomeDetailTopView from './../Home/homeDeatilTopView';

export default class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*顶部标题View*/}
               <HomeDetailTopView title= "北京省委宣传部领导和各大媒体北京省委" 
                                  author = "编辑: 马红云" time = "时间: 2017-09-40" 
                                  style = {styles.topViewStyle}>
               </HomeDetailTopView>
                {/*webView*/}
               <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.noticeId}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topViewStyle: {
        height: 150
    }
});