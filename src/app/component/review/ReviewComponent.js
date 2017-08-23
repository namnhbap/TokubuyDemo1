import React, {Component} from 'react';
import {
    FlatList,
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import TabStyle from "../../../res/style/TabStyle";
import AppStyle from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import ItemReviewComponent from "./ItemReviewComponent";

class ReviewComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'レビュー',
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../res/icon/photo-camera.png')}
                style={[TabStyle.Icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.Container}>
                <View style={AppStyle.HeaderStyle}>
                    <View style={AppStyle.ViewNull}/>
                    <Text style={AppStyle.TitleText}>レビュー</Text>
                    <Image source={require('../../../res/icon/plus-button.png')}
                           style={styles.ButtonStyle}/>
                </View>
                <FlatList
                    data={this.props.reviews.reviews}
                    renderItem={({item}) => {
                        return <ItemReviewComponent
                            review={item}
                        />
                    }}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                />
            </View>
        );
    }
}

function mapState(state) {
    return {
        reviews: state.reviews
    };
}

export default connect(mapState)(ReviewComponent);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    ButtonStyle: {
        height: 25,
        width: 25,
        marginRight: 15
    },
});

