import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';

export default class LineComponent extends Component {
    render() {
        const {text, image} = this.props;
        return (
                <View style={styles.Container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={image}
                            style={styles.Icon}
                        />
                        <Text style={styles.Text}>{text}</Text>
                    </View>
                    <Image
                        source={require('../../../res/icon/right-arrow.png')}
                        style={styles.Right}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingVertical: 7,
        marginBottom:1,
    },
    Icon: {
        height: 20,
        width: 15,
    },
    Right: {
        height: 15,
        width: 15,
    },
    Text: {
        fontSize: 12,
        marginLeft: 10,
    },
    More: {
        fontSize: 12,
    }
});