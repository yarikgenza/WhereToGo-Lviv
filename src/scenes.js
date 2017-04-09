import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScreen from './Containers/LaunchScreen';

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="launchScreen" component={LaunchScreen} initial />
  </Scene>,
);

export default Scenes;
