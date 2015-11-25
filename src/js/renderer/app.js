/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/App';
import story from './reducers/story';

const store = createStore(story);

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  ReactDOM.render(
    <Provider store={store}>
      <App foo={1} />
    </Provider>
  , container);
});
