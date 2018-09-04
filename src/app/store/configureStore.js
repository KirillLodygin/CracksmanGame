import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const reducer = rootReducer;
const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, middleware);

if(module.hot){
    module.hot.accept('../reducers', ()=>{
        const nextRootReducer = require('../reducers');
        store.replaceReducer(nextRootReducer);
    })
}

export default store;