import {
    SWAP_TIMER,
    SWAP_ANTE,
    SWAP_MISTAKES,
    SWAP_LIGHT} from '../constants/reredosConstants'

const initialState = {
    timer: '00:00:00',
    bank: '1 000 000 $',
    mistakes: '',
    light: false
};

export default function reredos(state = initialState, action){
    switch (action.type){
        case SWAP_TIMER:
            return {...state, timer: action.payload};

        case SWAP_ANTE:
            return {...state, bank: action.payload};

        case SWAP_MISTAKES:
            return{...state, mistakes: action.payload};

        case SWAP_LIGHT:
            return{...state, light: action.payload};

        default:
            return state;
    }
}