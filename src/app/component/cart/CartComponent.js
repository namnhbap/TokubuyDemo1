import React, {Component} from 'react';
import {
    FlatList,
    Image, ScrollView,
    StyleSheet, Text,
    View,
} from 'react-native';
import TabStyle from "../../../res/style/TabStyle";
import AppStyle from "../../../res/style/AppStyle";
import ItemCartComponent from "./ItemCartComponent";
import {connect} from "react-redux";

class CartComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'カート',
        header: null,
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/icon/ic_cart.png')}
                style={[TabStyle.Icon, {tintColor: tintColor}]}
            />
        ),
    };

    _renderItem = ({item}) => (
        <ItemCartComponent
            cart={item}
        />
    );

    _keyExtractor = (item, index) => item.id;


    render() {
        return (
            <View style={styles.Container}>
                <View style={AppStyle.HeaderStyle}>
                    <View style={AppStyle.ViewNull}/>
                    <Text style={AppStyle.TitleText}>カート</Text>
                    <View style={AppStyle.ViewNull}/>
                </View>
                <ScrollView>
                    <View style={styles.Main}>
                        <Image
                            source={require('../../../res/icon/img_cart.png')}
                            style={styles.ImageCart}
                        />
                        <Text style={styles.TextStyle}>カートに商品がありません～</Text>
                        <View style={styles.ButtonContainer}>
                            <Text style={styles.TextButton}>お買い物</Text>
                        </View>
                    </View>
                    <View style={styles.List}>
                        <Text style={styles.TextCartTitle}>おすすめ商品</Text>
                        <FlatList
                            numColumns={3}
                            data={this.props.carts}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function mapState(state) {
    return {
        carts: state.carts
    };
}

export default connect(mapState)(CartComponent);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    Main: {
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        paddingTop: 20
    },
    List: {
        backgroundColor: 'white',
    },
    ImageCart: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginTop: 30
    },
    ButtonContainer: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 3,
        marginBottom: 10,
        backgroundColor: '#1d92ff'
    },
    TextStyle: {
        fontSize: 12,
        color: 'black'
    },
    TextCartTitle: {
        fontSize: 12,
        color: 'black',
        margin: 10
    },
    TextButton: {
        fontSize: 14,
        color: 'white'
    }
});

