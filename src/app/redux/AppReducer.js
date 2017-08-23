import {combineReducers, createStore} from "redux";
import {ReviewReducer} from "./ReviewReducer";
import {FavouriteReducer} from "./FavouriteReducer";
import {CartReducer} from "./CartReducer";

const reducer = combineReducers({
    reviews: ReviewReducer,
    favourites: FavouriteReducer,
    carts: CartReducer
});

export const store = createStore(reducer);