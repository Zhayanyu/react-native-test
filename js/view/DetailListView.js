/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Slider,
    Image,
    ListView,
    Animated,
    Linking,
    TouchableOpacity,
} from 'react-native';


import LoadWaitView from './LoadWaitView'
import DetailListViewRow from './DetailListViewRow'

import { client } from '../utils/utils';

import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

export default class DetailListView extends React.Component {


    constructor(props) {
        super(props);

        let dataSource=new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 ,
            sectionHeaderHasChanged: (r1, r2) => r1 !== r2
        });


        this.state = {
            text:'',
            loadState:0,
            dataSource:dataSource,
        };
    }



    /**
     * 父类方法
     *
     * */
    componentDidMount() {

        //取出查询语句
        const {query,title}=this.props.data

        //与服务器交互
        client.query({
            query:query,
        })
            .then(data => {

                if(!data.data.viewer){
                    return ;
                }

                let viewer=data.data.viewer

                let dataArray=[]

                switch (title){
                    case 'Repositories':{
                        if(viewer&&viewer.repositories){
                            dataArray=viewer.repositories.nodes
                        }
                        break;
                    }
                    case 'Starts':{
                        if(viewer&&viewer.starredRepositories){
                            dataArray=viewer.starredRepositories.nodes
                        }
                        break;
                    }
                    case 'Followers':{
                        if(viewer&&viewer.followers){
                            dataArray=viewer.followers.nodes
                        }
                        break;
                    }
                    case 'Following':{
                        if(viewer&&viewer.following){
                            dataArray=viewer.following.nodes
                        }
                        break;
                    }
                }


                //交互成功的回调

                if(dataArray.length == 0){
                    this.setState({
                        loadState:2,
                    })
                }else {
                    this.setState({
                        loadState:1,
                        dataSource:this.state.dataSource.cloneWithRows(dataArray)
                    })
                }



                console.log(data)
            })
            .catch(error => {
                //交互失败的回调
                console.log(error)
            });

        //this.fetch()
    }


    render() {

        if(this.state.loadState == 0){
            return (
                <LoadWaitView/>
            )
        }

        if(this.state.loadState == 2){
            return (
                <View/>
            )
        }

        return (
            <ListView
                style={{backgroundColor:'white'}}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRows(rowData)}
            />
        )

    }

    renderRows(rowData) {

        return (
            <DetailListViewRow data={rowData} onPress={(url)=>this.onPressWithRow(url)}/>
        )

    }

    onPress(){

    }

    onPressWithRow(url){
        Linking.openURL(url);
    }
}


const styles = StyleSheet.create({
    contentView: {
        width:width,
        backgroundColor:'#f2f3f4',
        padding:4,

    },
});