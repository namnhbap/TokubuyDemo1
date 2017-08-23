import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';

export default class MiddleComponent extends Component {
    render() {
        const {title, content, image} = this.props;
        return (
            <View style={styles.Container}>
                <Text style={styles.TitleText}>{title}</Text>
                <Text style={styles.NormalText}>{content}</Text>
                <Image
                    source={image}
                    style={styles.ImageStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 145,
        backgroundColor: '#f8f8f8',
        borderRadius: 3,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5

    },
    TitleText: {
        fontFamily: 'japan_font',
        fontSize: 14,
        fontWeight: 'bold'
    },
    NormalText: {
        fontFamily: 'japan_font',
        fontSize: 12,
    },
    ImageStyle: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8

    }
});