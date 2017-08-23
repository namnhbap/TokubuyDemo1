import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';

export default class SoundComponent extends Component {
    render() {
        return (
            <View style={{
                height: 34,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 10,
                paddingVertical: 7,
                marginBottom:1,
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={require('../../../res/icon/ic_sound.png')}
                        style={{
                            height: 13,
                            width: 15,
                        }}
                    />
                    <Text style={{
                        fontSize: 12,
                        marginLeft: 10,
                    }}>友達招待</Text>
                </View>
                <Image
                    source={require('../../../res/icon/right-arrow.png')}
                    style={{
                        height: 15,
                        width: 15,
                    }}/>
            </View>
        );
    }
}