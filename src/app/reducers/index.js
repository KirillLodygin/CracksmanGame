import { combineReducers } from 'redux';
import reredos from './reredos';
import downblock from './downblock';
import tower from './tower';
import firstinterface from './firstinterface';

export default combineReducers({
    reredos,
    tower,
    downblock,
    firstinterface
});