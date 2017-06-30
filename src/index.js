import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';
import reducer from './reducers/reducer';
import {addComment} from './actions/actions';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
