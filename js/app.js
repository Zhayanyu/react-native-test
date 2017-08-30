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
    Platform,
    ListView,
    View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar,ScrollableTabBar}  from 'react-native-scrollable-tab-view';
import { client,testDataSource } from './utils/utils';
import gql from 'graphql-tag';


import DetailListView from './view/DetailListView';


export default class testModel extends Component {

    /**
     * 最佳 初始化state 的方法
     * @param object 父视图传入的参数
     *
     * */
    constructor(props) {
        super(props);


        this.state = {
            dataArray:testDataSource,
        };

    }


    /**
     * 父类方法
     *
     * */
    componentDidMount() {

        /*repositories(first: 10) {
            nodes {
                name
            }
        }*/

        /*//与服务器交互
        client.query({
            query: gql`
                query {
                  viewer {
                    login
                    name
                  }
                }
             `,
        })
            .then(data => {

                //交互成功的回调
                console.log(data)
            })
            .catch(error => {
                //交互失败的回调
                console.log(error)
            });*/
        //this.fetch()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    tabBarPosition='top'  /*样式*/
                    tabBarBackgroundColor='#f2f3f4'
                    tabBarActiveTextColor='#232326'
                    tabBarInactiveTextColor='#232326'
                    scrollWithoutAnimation={true}
                    renderTabBar={() => <DefaultTabBar
                        underlineColor='black' /*下划线颜色*/
                    />}
                >
                    {this.renderScrollableTabViewRows()}
                </ScrollableTabView>
            </View>

        );
    }
    renderScrollableTabViewRows(){

        return this.state.dataArray.map((item,i)=>{
            return(
                <DetailListView key={i} tabLabel={item.title} data={item} />
            )
        })

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Platform.OS === 'ios'?20:0 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});





