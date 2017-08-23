import React, {Component} from 'react';
import {
    FlatList, Image, Text, TextInput,
    View, StyleSheet, TouchableOpacity
} from 'react-native';
import {MenuStyles} from "../../../res/style/MenuStyle";
import ItemMenu from "./ItemMenu";
import Menu from "../../model/Menu";
import AppStyle from "../../../res/style/AppStyle";

export default class MenuComponent extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Menu(1, "全ての商品", require('../../../res/icon/menu1.png')),
                new Menu(2, "デジタル", require('../../../res/icon/menu2.png')),
                new Menu(3, "家電", require('../../../res/icon/menu3.png')),
                new Menu(4, "アクセサリー", require('../../../res/icon/menu4.png')),
                new Menu(5, "食品＆飲料", require('../../../res/icon/menu5.png')),
                new Menu(6, "コスメ・美容", require('../../../res/icon/menu6.png')),
                new Menu(7, "スポーツ", require('../../../res/icon/menu7.png')),
                new Menu(8, "ゲーム関連", require('../../../res/icon/menu8.png')),
                new Menu(9, "仮想通貨", require('../../../res/icon/menu9.png')),
                new Menu(10, "その他商品", require('../../../res/icon/menu10.png')),
                new Menu(11, "少物", require('../../../res/icon/menu11.png')),
                new Menu(12, "ブランド品", require('../../../res/icon/menu12.png')),
            ],
        }
    }

    _renderItem = ({item}) => {
        return <ItemMenu
            itemData={item}
        />
    };

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={MenuStyles.Container}>
                <View style={AppStyle.HeaderStyle}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                        <Image
                            source={require('../../../res/icon/ic_left_arrow.png')}
                            style={styles.ButtonStyle}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.TitleText}>カテゴリ</Text>
                    <View style={AppStyle.ViewNull}/>
                </View>
                <View style={MenuStyles.ViewContent}>
                    <View style={MenuStyles.ViewSearch}>
                        <View style={MenuStyles.ViewContextSearch}>
                            <Image style={{width: 22, height: 22}}
                                   source={require('../../../res/icon/ic_search.png')}/>
                            <TextInput style={{flex: 1}}
                                       underlineColorAndroid='transparent'
                                       placeholder='商品を検索'
                                       placeholderTextColor='#979C9C'
                            />
                        </View>
                    </View>
                    <View style={MenuStyles.ViewFlatList}>
                        <FlatList
                            numColumns={2}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ButtonStyle: {
        height: 16,
        width: 16,
        marginHorizontal: 15
    },
    TitleText: {
        fontSize: 25,
        color: 'white',
    }
});


