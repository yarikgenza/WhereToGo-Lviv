import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';

import scenes from './scenes';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const bootstrap = () => {
  return (
    <Router scenes={scenes} />
  )
}


export default bootstrap;
