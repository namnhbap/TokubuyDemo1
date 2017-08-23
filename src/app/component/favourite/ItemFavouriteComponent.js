import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import ContentComponent from "./ContentComponent";
import CountdownComponent from "./CountdownComponent";
import {Favourite} from "../../model/Favourite";


export default class ItemFavouriteComponent extends Component {

    render() {
        const favourite : Favourite = this.props.favourite;
        return (
            <View style={styles.Container}>
                <Image
                    source={favourite.image}
                    style={styles.ImageItem}
                />
                <Image
                    source={require('../../../res/img/tick.png')}
                    style={styles.TickImage}
                />
                <View>
                    <ContentComponent
                        title={favourite.title}
                        content={favourite.content}
                    />
                    <CountdownComponent
                        time={favourite.time}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 1
    },
    ImageItem: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 8
    },
    TickImage: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 0

    }
});