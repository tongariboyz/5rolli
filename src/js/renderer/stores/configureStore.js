/* @flow */
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);

/**
 * ストアを作成
 *
 * @return {Object} store
 */
export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
