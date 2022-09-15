import {legacy_createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers/allReducer';

const store = legacy_createStore(allReducers,compose(applyMiddleware(thunk)));

export default store;