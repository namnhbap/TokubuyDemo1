import React, {Component} from 'react';
import {
    Image, ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import TabStyle from "../../../res/style/TabStyle";
import AppStyle from "../../../res/style/AppStyle";
import LineComponent from "./LineComponent";
import SoundComponent from "./SoundComponent";

export default class SettingComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'YOU',
        header: null,
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/icon/ic_setting.png')}
                style={[TabStyle.Icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.SomContainer}>
                    <Image
                        blurRadius={1}
                        style={styles.BackGround}
                        source={require('../../../res/img/vita_som.jpg')}
                    />
                    <View style={styles.Header}>
                        <Image
                            source={require('../../../res/icon/share.png')}
                            style={styles.IconTop}
                        />
                        <Image
                            source={require('../../../res/icon/settings.png')}
                            style={styles.IconTop}
                        />
                    </View>
                    <View style={styles.Avatar}>
                        <Image
                            source={require('../../../res/img/vita_som.jpg')}
                            style={styles.ImageSom}
                        />
                        <Text style={styles.TextSom}>ログイン</Text>
                    </View>

                </View>
                <View style={styles.Form}>
                    <View style={styles.MainForm}>
                        <LineComponent
                            text='初めての方へ'
                            image={require('../../../res/icon/ic_user.png')}
                        />
                        <View style={{height: 0.5, backgroundColor: '#ddd'}}/>
                        <SoundComponent/>
                        <View style={{height: 0.5, backgroundColor: '#ddd'}}/>
                        <LineComponent
                            text='ポイント'
                            image={require('../../../res/icon/ic_award.png')}
                        />
                        <View style={{height: 0.5, backgroundColor: '#ddd'}}/>
                        <LineComponent
                            text='アドレス著'
                            image={require('../../../res/icon/ic_position.png')}
                        />
                        <View style={{height: 0.5, backgroundColor: '#ddd'}}/>
                        <LineComponent
                            text='購入履歴'
                            image={require('../../../res/icon/ic_battery.png')}
                        />
                    </View>

                    <View style={styles.BotForm}>
                        <LineComponent
                            text='獲得履歴'
                            image={require('../../../res/icon/ic_cup.png')}
                        />
                        <View style={{height: 0.5, backgroundColor: '#ddd'}}/>
                        <LineComponent
                            text='レビュー'
                            image={require('../../../res/icon/ic_camera.png')}
                        />
                    </View>
                    <View style={{flex: 10, alignItems:'center'}}>
                        <Text style={styles.TextBot}>全ての計算イベントはapple.Incと無関係です。</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    SomContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BackGround: {
        height: '100%',
        width: '100%',
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        position: 'absolute',
        top: 0,
        backgroundColor: 'transparent'
    },
    Avatar: {
        position: 'absolute',
        top: 40,
        alignItems: 'center'

    },
    Form: {
        flex: 20,
        backgroundColor: '#eee'
    },
    MainForm: {
        flex: 22,
        paddingLeft: 15,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    BotForm: {
        flex: 9,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    IconTop: {
        height: 22,
        width: 22,
        marginHorizontal: 10,
        marginTop: 15
    },
    ImageSom: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginVertical: 10,
    },
    TextBot: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 10
    },
    TextSom: {
        fontSize: 12,
        paddingVertical: 8,
        paddingHorizontal: 40,
        color: 'white',
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: 'white',
        backgroundColor: 'transparent',
        marginBottom: 20,
    }
});

