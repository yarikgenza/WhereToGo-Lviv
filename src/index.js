import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import configureStore from './configureStore';
import getTheme from './Themes/components';
import AppNavigator from './appNavigator';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const store = configureStore();

class bootstrap extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
          <AppNavigator />
        </StyleProvider>
      </Provider>
    );
  }
}

export default bootstrap;
