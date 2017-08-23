
import {Favourite} from "../model/Favourite";

_randomTime = () =>  Math.floor((Math.random() * 24) + 1)*3600;

const defaultState = {
    favourites: [
        new Favourite(0, '私BUY - 5000神よ、尊い', '総必要：50 口', _randomTime(),
            require('../../res/img/vita_som.jpg')),
        new Favourite(1, '私BUY - 1000神よ、尊い', '総必要：10 口', _randomTime(),
            require('../../res/img/som.jpg')),
        new Favourite(2, '私BUY - 2000神よ、尊い', '総必要：20 口', _randomTime(),
            require('../../res/img/som2.jpg')),
        new Favourite(4, '私BUY - 500神よ、尊い', '総必要：5 口', _randomTime(),
            require('../../res/img/som.jpg')),
        new Favourite(5, '私BUY - 5000神よ、尊い', '総必要：50 口', _randomTime(),
            require('../../res/img/som.jpg')),
        new Favourite(6, '私BUY - 3000神よ、尊い', '総必要：30 口', _randomTime(),
            require('../../res/img/som.jpg')),
    ]
};

export const FavouriteReducer = (state = defaultState.favourites, action) => {
    if (action.type === 'ADD2') {
        if (action.favourites) {
            return [...state, action.favourites];
        }
    }
    return state;
};