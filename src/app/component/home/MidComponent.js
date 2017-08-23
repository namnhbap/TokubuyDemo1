import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';

export default class MidComponent extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        source={require('../../../res/icon/ic_message.png')}
                        style={styles.ImageStyle}
                    />
                    <Text style={styles.Text}>カテゴリー</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        source={require('../../../res/icon/ic_buy.png')}
                        style={styles.ImageStyle}
                    />
                    <Text style={styles.Text}>1000円BUY</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        source={require('../../../res/icon/ic_img.png')}
                        style={styles.ImageStyle}
                    />
                    <Text style={styles.Text}>レビュー</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                        source={require('../../../res/icon/ic_qa.png')}
                        style={styles.ImageStyle}
                    />
                    <Text style={styles.Text}>ヘルプ</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 70,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    ImageStyle: {
        height: 30,
        width: 30,
        marginBottom: 5,
    },
    Text: {
        fontSize: 12,
        fontFamily: 'japan-font'
    },
});