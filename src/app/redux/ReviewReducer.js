import {Review} from "../model/Review";
import {User} from "../model/User";

let users: Array<User> = [
    new User(0, 'Jeon Somi', require('../../res/img/som.jpg')),
    new User(1, 'はるか', require('../../res/img/user.png')),
    new User(2, 'はるか', require('../../res/img/user.png')),
];

const defaultState = {
    reviews: [
        new Review(0, users[0], '私は謳になる', '神よ、尊い貴方に私の体を捧げます。...',
            require('../../res/img/vita_som.jpg'), 10, 0, '08-17 05:34', false),
        new Review(1, users[1], '私は謳に', '神よ、尊い貴を捧げます。...',
            require('../../res/img/som.jpg'), 100, 0, '07-17 12:30', false),
        new Review(2, users[2], '私は謳になる', '神よ、尊い貴方に私の体を捧げます。...',
            require('../../res/img/vita_som.jpg'), 10, 0, '07-17 07:54', false),
    ]
};

export const ReviewReducer = (state = defaultState, action) => {
    if (action.type === 'LIKE') {
        let stateLike =  {
            ...state,
            reviews: state.reviews.map((item) => {
                if (item.id === action.id) {
                    return {...item, numLike: item.numLike + 1};
                } else {
                    return item;
                }
            })
        };
        return stateLike;
    }
    if (action.type === 'COMMENT') {
        let stateComment =  {
            ...state,
            reviews: state.reviews.map((item) => {
                if (item.id === action.id) {
                    return {...item, numComment: item.numComment + 1};
                } else {
                    return item;
                }
            })
        };
        return stateComment;
    }
    return state;
};