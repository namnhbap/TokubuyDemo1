import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import {Cart} from "../../model/Cart";

export default class ItemCartComponent extends Component {
    render() {
        const cart: Cart = this.props.cart;
        const percent = {
            flex: cart.percent
        };
        const remain = {
            flex: cart.remain
        };
        return (
            <View style={styles.Container}>
                <Image
                    source={cart.image}
                    style={styles.Image}
                />
                <Text
                    style={styles.TextInfo}
                    numberOfLines={2}
                >{cart.text}</Text>
                <View style={styles.PercentContainer}>
                    <View style={[styles.LineLeft, percent]}/>
                    <View style={[styles.LineRight, remain]}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    PercentContainer: {
        flexDirection: 'row',
        height: 5,
        marginVertical: 10
    },
    LineLeft: {
        backgroundColor: '#f49227',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
    },
    LineRight: {
        backgroundColor: '#fadec8',
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
    },
    Image: {
        height: 60,
        width: 60,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    TextInfo: {
        fontSize: 10,
        color: '#808080',
    }
});