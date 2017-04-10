import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import configureStore from './configureStore';
import getTheme from './Themes/components';

import scenes from './scenes';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const store = configureStore();

const bootstrap = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme()}>
      <Router scenes={scenes} />
    </StyleProvider>
  </Provider>
);


export default bootstrap;
