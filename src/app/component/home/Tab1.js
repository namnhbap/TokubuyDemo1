import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class Tab1 extends Component {
    render() {
        return (
            <View style={styles.Container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});