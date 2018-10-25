import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FilerContainer from './containers/FilerContainer';
import configureStore from './store';

const store = configureStore();

// entry point
// setup store and render application container
render(
  <Provider store={store}>
    <FilerContainer />
  </Provider>,
  document.getElementById('root')
);
