
import {TabNavigator} from "react-navigation";
import Tab1 from "./Tab1";
import TabStyle from "../../../res/style/TabStyle";

export const TabHome = TabNavigator({
    Tab1: {
        screen: Tab1,
    },
    Tab2: {
        screen: Tab1,
    },
    Tab3: {
        screen: Tab1,
    },
    Tab4: {
        screen: Tab1,
    },
    Tab5: {
        screen: Tab1,
    },
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
        labelStyle: TabStyle.IconText,
        inactiveTintColor: '#ccc',
        activeTintColor: '#de2f50',
        showIcon: true,
        style: {
            borderTopWidth: 0.5,
            borderColor: '#d8d6d6',
            backgroundColor: '#f7f7f7',
        }
    },
});