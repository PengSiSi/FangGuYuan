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

import HomeList from './homeList';
import HomeListDetail from './homeDetail';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import FindList from './homeList';

export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            typeArr : [
                {'title':'党建园地', 'type':'0',},
                {'title':'公务通知', 'type':'1',}
            ],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarActiveTextColor='green'
                    tabBarInactiveTextColor='#rgb(67,67,67)'
                    tabBarBackgroundColor='#f7f7f7'
                    tabBarUnderlineStyle={{backgroundColor: 'green'}}
                    style={{height:10}
                }
                >
                    {
                        this.state.typeArr.map((item, i) => {
                            return (
                                <HomeList key={i} tabLabel={item.title} type={item.type}
                                          navigator={this.props.navigator} {...this.props}/>
                            )
                        })
                    }
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});