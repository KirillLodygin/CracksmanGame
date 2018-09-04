import { FIELD_VISIBILITY } from '../constants/firstInterfaceConstants';

const InitialState = {
    ranks: [2,3,4,5,6,7,8,9,10],
    visible: true
};

export default function firstinterface(state = InitialState, action){
    switch (action.type){
        case FIELD_VISIBILITY:
            return{...state, visible: action.payload};

        default:
            return state;
    }
}