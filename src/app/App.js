import HomeComponent from "./component/home/HomeComponent";
import ReviewComponent from "./component/review/ReviewComponent";
import FavouriteComponent from "./component/favourite/FavouriteComponent";
import SettingComponent from "./component/setting/SettingComponent";
import CartComponent from "./component/cart/CartComponent";
import {TabNavigator, StackNavigator} from "react-navigation";
import TabStyle from "../res/style/TabStyle";
import MenuComponent from "./component/menu/MenuComponent";

const Tabs = TabNavigator({
    Home: {
        screen: HomeComponent,
    },
    FavouriteComponent: {
        screen: FavouriteComponent,
    },
    ReviewComponent: {
        screen: ReviewComponent,
    },
    CartComponent: {
        screen: CartComponent,
    },
    SettingComponent: {
        screen: SettingComponent,
    },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
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

export const App = StackNavigator({
    Tabs: { screen: Tabs },
    Menu: { screen: MenuComponent },
});