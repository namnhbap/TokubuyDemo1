import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
    },
    HeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%',
        height: 40,
        backgroundColor: '#CC3366'
    },
    HeaderSetting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%',
        height: 40,
        backgroundColor: 'transparent'
    },
    ViewNull: {
        width: 25,
        height: 25,
        marginLeft: 15
    },
    TitleText: {
        fontSize: 14,
        fontFamily: 'japan_font',
        color: 'white',
    },
    ImageSlide:{
        height: 170,
        width: '100%',
    }
});

