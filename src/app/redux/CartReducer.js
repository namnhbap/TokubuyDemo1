import {Cart} from "../model/Cart";

const defaultState = {
    carts: [
        new Cart(0, 'カBUYートに商品がありません～がありません～', 0, 100, require('../../res/img/vita_som.jpg')),
        new Cart(1, '私BUY神よ品がありません～がありません～', 30, 70, require('../../res/img/som.jpg')),
        new Cart(2, '私BUY神よ品がありません～がありません～', 20, 80, require('../../res/img/som2.jpg')),
        new Cart(3, '私BUY神品がありません～がありません～', 50, 50, require('../../res/img/vita_som.jpg')),
        new Cart(4, '私BUY神品がありません～がありません～', 60, 40, require('../../res/img/som2.jpg')),
        new Cart(5, '私BUY神品がありません～がありません～', 40, 60, require('../../res/img/vita_som.jpg')),
        new Cart(6, 'カBUYートに商品がありません～がありません～', 0, 100, require('../../res/img/vita_som.jpg')),
        new Cart(7, '私BUY神よ品がありません～がありません～', 30, 70, require('../../res/img/som.jpg')),
        new Cart(8, '私BUY神よ品がありません～がありません～', 20, 80, require('../../res/img/som2.jpg')),
        new Cart(9, '私BUY神品がありません～がありません～', 50, 50, require('../../res/img/vita_som.jpg')),
        new Cart(10, '私BUY神品がありません～がありません～', 60, 40, require('../../res/img/som2.jpg')),
        new Cart(11, '私BUY神品がありません～がありません～', 40, 60, require('../../res/img/vita_som.jpg')),
    ]
};

export const CartReducer = (state = defaultState.carts, action) => {
    if (action.type === 'ADD3') {
        if (action.carts) {
            return [...state, action.carts];
        }
    }
    return state;
};