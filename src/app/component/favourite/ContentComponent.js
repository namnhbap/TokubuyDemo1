import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View,
} from 'react-native';

export default class ContentComponent extends Component {
    render() {
        const {title, content} = this.props;
        return (
            <View style={styles.Container}>
                <Text style={styles.Title}>{title}</Text>
                <Text style={styles.Content}>{content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        padding: 10,
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 10,
    },
    Content: {
        fontSize: 12,
        fontFamily: 'OpenSans-Light'
    }
});