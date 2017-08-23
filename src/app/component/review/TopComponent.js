import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View,
} from 'react-native';

export default class TopComponent extends Component {
    render() {
        const {name, dateTime} = this.props;

        return (
            <View style={styles.Container}>
                <Text style={styles.NameText}>{name}</Text>
                <Text style={styles.DateTime}>{dateTime}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        marginLeft: 10,
        marginRight: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
    },
    NameText: {
        fontFamily: 'japan_font',
        fontSize: 16,
        color: '#7cc7ff'
    },
    DateTime: {
        fontSize: 12,
    }
});