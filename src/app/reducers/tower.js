import {
    TOWER_REAL_STATE,
    SWAP_INFORMATION} from '../constants/towerConstants';
    /*
    SWAP_TOWER_RANK,
    TOWER_INC_REAL_STATE,
    POSITIONS_REAL_STATE,
    TOWER_ACTIVE,
    FLOORS_BUSY,
    TOWER_HEIGHT,
    SWAP_DISABLED,
    SWAP_ENTRY,
    SWAP_EXIT,
    SWAP_ROUNDS,
    SWAP_MISSTEPS,
    SWAP_BANK
    */

const initialState = {
    information: {
        rank: '1',
        entry: false,
        exit: false,
        rounds: 0,
        missteps: 0,
        bank: 1000000
    },

    realTower:  [
        {
            busy: false,
            position: 5,
            increment: 4,
            knob: 4,
            disabled: false,
            active: false
        },
        {
            busy: false,
            position: 4,
            increment: 4,
            knob: 3,
            disabled: false,
            active: false
        },
        {
            busy: false,
            position: 3,
            increment: 4,
            knob: 2,
            disabled: false,
            active: false
        },
        {
            busy: false,
            position: 2,
            increment: 4,
            knob: 1,
            disabled: false,
            active: false
        }
    ]
};

export default function tower(state=initialState, action){
    switch (action.type)
    {
        case TOWER_REAL_STATE:
            return {...state, realTower: action.payload};

        case SWAP_INFORMATION:
            return {...state,information: action.payload};

        /*
        case SWAP_TOWER_RANK:
            return {...state, rank: action.payload};

        case TOWER_INC_REAL_STATE:
            return {...state, increments: action.payload};

        case POSITIONS_REAL_STATE:
            return {...state, positions: action.payload };

        case TOWER_ACTIVE:
            return {...state, active: action.payload};

        case FLOORS_BUSY:
            return {...state, busy: action.payload};

        case TOWER_HEIGHT:
            return {...state, height: action.payload};

        case SWAP_DISABLED:
            return {...state, disabled: action.payload};

        case SWAP_ENTRY:
            return {...state, entry: action.payload};

        case SWAP_EXIT:
            return {...state, exit: action.payload};

        case SWAP_ROUNDS:
            return {...state, rounds: action.payload};

        case SWAP_MISSTEPS:
            return {...state, missteps: action.payload};

        case SWAP_BANK:
            return {...state, bank: action.payload};
        */

        default:
            return state;
    }
}
