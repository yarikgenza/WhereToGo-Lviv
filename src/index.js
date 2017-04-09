import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import configureStore from './configureStore';

import scenes from './scenes';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const store = configureStore();

const bootstrap = () => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
);


export default bootstrap;
