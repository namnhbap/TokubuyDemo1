import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import {actionLike, actionComment} from "../../redux/ReviewAction";

class FooterComponent extends Component {

    render() {
        const {numLike, numComment, id} = this.props;
        return (
            <View style={styles.Container}>
                <View style={styles.LikeContainer}>
                    <TouchableOpacity onPress={() => this.props.actionLike(id)}>
                        <Image
                            source={require('../../../res/icon/like.png')}
                            style={styles.IconFooter}
                        />
                    </TouchableOpacity>
                    <Text style={styles.FooterText}>いいね({numLike})</Text>
                </View>
                <View style={styles.LikeContainer}>
                    <TouchableOpacity onPress={() => this.props.actionComment(id)}>
                    <Image
                        source={require('../../../res/icon/chat.png')}
                        style={styles.IconFooter}
                    />
                    </TouchableOpacity>
                    <Text style={styles.FooterText}>コメント({numComment})</Text>
                </View>
                <Text style={styles.FooterText2}>運試し></Text>
            </View>
        );
    }
}

export default connect(null, {actionLike, actionComment})(FooterComponent);

const styles = StyleSheet.create({
    Container: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#efeff4',
        flexDirection: 'row',
        borderRadius: 3,
        marginHorizontal: 10,
        marginBottom: 8
    },
    LikeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    IconFooter: {
        marginTop: 2,
        height: 14,
        width: 14,
    },
    FooterText: {
        marginHorizontal: 10,
        fontSize: 12,
        fontFamily: 'japan_font',
    },
    FooterText2: {
        marginHorizontal: 10,
        fontSize: 12,
        fontFamily: 'japan_font',
        color: 'red'
    },
});