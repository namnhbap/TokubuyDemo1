import React, {Component} from 'react';
import {
    FlatList,
    Image, TouchableOpacity,
    StyleSheet, Text,
    View,
} from 'react-native';
import TabStyle from "../../../res/style/TabStyle";
import {connect} from "react-redux";
import AppStyle from "../../../res/style/AppStyle";
import MidComponent from "./MidComponent";
import Swiper from "react-native-swiper";
import TabHome from "./TabHome";

class HomeComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'ホーム',
        header: null,
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/icon/ic_home.png')}
                style={[TabStyle.Icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            visibleSwiper: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true,
            });
        }, 100);
    }

    renderSwiper() {
        if (this.state.visibleSwiper) {
            return (
                <Swiper
                    autoplay={true}
                    loop={true}
                    index={0}
                    horizontal={true}
                    autoplayTimeout={3}
                >
                    <View style={{
                        height: 170,
                        width: '100%',
                    }}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/somh1.jpg')}/>
                    </View>
                    <View style={{
                        height: 170,
                        width: '100%',
                    }}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/somh2.jpg')}/>
                    </View>
                    <View style={{
                        height: 170,
                        width: '100%',
                    }}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/somh3.jpg')}/>
                    </View>
                </Swiper>
            )
        }
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={AppStyle.HeaderStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                        <Image
                            source={require('../../../res/icon/ic_menu.png')}
                            style={styles.ButtonStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.TitleText}>最BUY!</Text>
                    <Image
                        source={require('../../../res/icon/ic_msg.png')}
                        style={styles.ButtonStyle}
                    />
                </View>

                <View style={{
                    height: 170,
                    width: '100%',
                }}>
                    {this.renderSwiper()}
                </View>

                <MidComponent/>

                <View style={styles.Announce}>
                    <Image
                        source={require('../../../res/icon/ic_announce.png')}
                        style={styles.ImageSound}
                    />
                    <Text
                        numberOfLines={1}
                        style={{fontSize: 10, marginRight: 8}}
                    >締切間!</Text>
                    <Text
                        numberOfLines={1}
                        style={{fontSize: 10, color: '#CC3366'}}
                    >Jeon Somi</Text>
                    <Text
                        numberOfLines={1}
                        style={{fontSize: 10}}
                    >最新[9467]i私BUY - 2000神よ、尊最新の発い</Text>
                </View>

            </View>
        );
    }
}

function mapState(state) {
    return {
        reviews: state.reviews
    };
}

export default connect(mapState)(HomeComponent);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    ButtonStyle: {
        height: 25,
        width: 25,
        marginHorizontal: 15
    },
    Announce: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    ImageStyle: {
        height: 170,
        width: '100%',
    },
    ImageSound: {
        height: 17,
        width: 25,
        marginHorizontal: 8,
    },
    TitleText: {
        fontSize: 25,
        color: 'white',
    }
});