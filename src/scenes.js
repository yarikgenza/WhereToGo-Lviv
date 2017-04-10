import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScreen from './Containers/LaunchScreen';
import LocationScreen from './Containers/LocationScreen';
import CategoryScreen from './Containers/CategoryScreen';

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="launchScreen" component={LaunchScreen} initial />
    <Scene key="locationScreen" component={LocationScreen} />
    <Scene key="categoryScreen" component={CategoryScreen} />
  </Scene>,
);

export default Scenes;
