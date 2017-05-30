
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    PixelRatio
} from 'react-native';

import HomeListJson from './homeList.json';
import Util from './../Util/util';
import HomeDetail from './homeDetail';

export default class HomeList extends Component {

    static defaultProps = {

    };

    // 构造
    constructor(props) {
    super(props);
    console.log(this.props);
    // 1. 数据源
    var ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    // 初始状态
    this.state = {
        dataSource:ds,
        flag:true  // 标记是否是空数据
    };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style = {{marginTop: 20}}
            />
        );
    }

    // 数据请求
    componentDidMount() {
        // 从网络请求数据
        this.loadDataFormNet();
    }

    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
               // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(HomeListJson.data)
                });
            })
    }

    // 具体的每行
    renderRow(rowData) {
        // 防止空数据
        if (!this.state.flag) {
            return;
        }
        return(
            <TouchableOpacity style={styles.cellStyle} onPress={()=>this.pushToHomeDetail(rowData.docid)}>
                <View style={styles.containerViewStyle}>
                    {/*左边的view*/}
                    <View style={styles.leftViewStyle}>
                        <Text style={{color:'black', fontSize:17}} numberOfLines = {1}>{rowData.title}</Text>
                        <Text style={{color:'#333', fontSize:14,marginTop: 10}}>{rowData.time}</Text>
                    </View>
                    {/*右边的view*/}
                    <Text style={styles.rightitemStyle}>{rowData.department}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    // push详情页
    pushToHomeDetail(noticeId){
        console.log(this.props.navigation);
        // this.props.navigation.navigate(HomeDetail, { name: 'two' })
        const { navigate } = this.props.navigation;
        navigate('HomeDetail', { user: 'Lucy' })
    }
}

const styles = StyleSheet.create({

    // cell
    cellStyle: {
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#666',
        flexDirection:'row',
        padding:10
    },

    containerViewStyle: {
        justifyContent: 'center',
        flexDirection:'row'
    },
    // 左边view
    leftViewStyle: {
        justifyContent:'space-between',
        width: Util.size.width * 0.7
    },

    // 教务处
    rightitemStyle: {
        marginTop: -22,
        marginLeft: 40,
        fontSize: 15,
        textAlign: 'right',
        alignSelf: 'center',
        color: 'green',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'green'
    }
});