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

    TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

export default class DetailListViewRow extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
       const {data} =this.props
        return (
            <View style={styles.view}>
                <Text  style={styles.text}>{data.name}</Text>
                <Text  onPress={()=>this.onPress(data.url)} style={styles.text}>{data.url}</Text>
            </View>
        )
    }

    onPress(url){
        const {onPress} =this.props
        onPress&&onPress(url)
    }

    
}
const styles = StyleSheet.create({
    view:{
        minHeight:60,
        paddingLeft:15,
        width:width,
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
    },
    text:{
        width:width-30,
    }
});