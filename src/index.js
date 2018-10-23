import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import store from './store';

// entry point
// setup store and render application container
render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById('root')
);
