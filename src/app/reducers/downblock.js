import { SWAP_DOWNBLOCK } from '../constants/downBlockConstants';

const initialState = {
    marker: [':: ПОПРОБУЙ ПРОБРАТЬСЯ В БАШНЮ. Выбери и нажми рычаг, чтобы привести шестерни башни в движение']
};

export default function downblock(state = initialState, action){
    switch (action.type){
        case SWAP_DOWNBLOCK:
            return {...state, marker: action.payload};

        default:
            return state;
    }
}