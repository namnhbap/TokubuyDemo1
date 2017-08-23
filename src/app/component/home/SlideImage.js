import React, {Component} from "react"
import {Image, View} from "react-native"
import Swiper from 'react-native-swiper';
import AppStyle from "../../../res/style/AppStyle";


export default class SlideImage extends Component {
    render() {
        return (

            <View style={{width: '100%', height: 170}}>
                <Swiper
                    width="100%"
                    autoplay={true}
                    autoplayTimeout={3}
                >
                    <View style={AppStyle.slide}>
                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/somh1.jpg')}/>
                    </View>

                    <View style={AppStyle.slide}>
                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/somh2.jpg')}/>
                    </View>

                    <View style={AppStyle.slide}>

                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/somh3.jpg')}/>
                    </View>

                </Swiper>

            </View>
        )
    }
}