import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import FooterComponent from "./FooterComponent";
import MiddleComponent from "./MiddleComponent";
import TopComponent from "./TopComponent";
import {Review} from "../../model/Review";

export default class ItemReviewComponent extends React.PureComponent {

    render() {
        const review: Review = this.props.review;
        return (
            <View style={styles.Container}>
                <Image
                    source={review.user.image}
                    style={styles.ImageStyle}
                />
                <View style={{flex: 1, marginTop: 5}}>
                    <TopComponent
                        name={review.user.name}
                        dateTime={review.dateTime}
                    />
                    <MiddleComponent
                        title={review.title}
                        content={review.content}
                        image={review.imageContent}
                    />
                    <FooterComponent
                        numLike={review.numLike}
                        numComment={review.numComment}
                        id={review.id}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 1
    },
    ImageStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 8,
    }
});

