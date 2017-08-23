import React, {Component} from 'react';
import {
    FlatList,
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import TabStyle from "../../../res/style/TabStyle";
import AppStyle from "../../../res/style/AppStyle";
import CountdownComponent from "./CountdownComponent";
import ContentComponent from "./ContentComponent";
import ItemFavouriteComponent from "./ItemFavouriteComponent";
import {Favourite} from "../../model/Favourite";
import {connect} from "react-redux";

class FavouriteComponent extends Component {

    static navigationOptions = {
        tabBarLabel: '最新の発表',
        header: null,
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/icon/ic_favourite.png')}
                style={[TabStyle.Icon, {tintColor: tintColor}]}
            />
        ),
    };

    _renderItem = ({item}) => (
        <ItemFavouriteComponent
            favourite={item}
        />
    );

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.Container}>
                <View style={AppStyle.HeaderStyle}>
                    <View style={AppStyle.ViewNull}/>
                    <Text style={AppStyle.TitleText}>最新の発表</Text>
                    <View style={AppStyle.ViewNull}/>
                </View>
                <FlatList
                    data={this.props.favourites}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

function mapState(state) {
    return {
        favourites: state.favourites
    };
}

export default connect(mapState)(FavouriteComponent);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
});

