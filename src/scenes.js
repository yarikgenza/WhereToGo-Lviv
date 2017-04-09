import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScreen from './Containers/LaunchScreen';
import LocationScreen from './Containers/LocationScreen';

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="launchScreen" component={LaunchScreen} initial />
    <Scene key="locationScreen" component={LocationScreen} />
  </Scene>,
);

export default Scenes;
