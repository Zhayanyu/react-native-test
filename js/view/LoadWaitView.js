
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Image,
} from 'react-native';


import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');
import Spinner from 'react-native-spinkit';
//var types=['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt']
export default class LoadWaitView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        //<Spinner style={{marginBottom:20,marginRight:20}} size={80} type={'Bounce'} color='#de3d96'/>
    }
    static propTypes = {
      
    }

    render() {
        return (
            <View pointerEvents={'none'} style={styles.container}>
                <View  style={styles.loadView}>
                    <Spinner size={40} type={Platform.OS === 'ios'?'ArcAlt':'Circle'} color='#f23030'/>
                    <View style={styles.textView}>
                        <Text style={{fontSize:16,color:'#f23030',fontWeight:'600',}}>{'Y Y'}</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center',
    },
    textView:{
        marginTop:-40,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
    },
    loadView: {
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:10
    },
});