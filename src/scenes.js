import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScreen from './Containers/LaunchScreen';
import LocationScreen from './Containers/LocationScreen';
import CategoryScreen from './Containers/CategoryScreen';

import PlacesScreen from './Containers/Places/PlacesScreen';

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="launchScreen" component={LaunchScreen} />
    <Scene key="locationScreen" component={LocationScreen} />
    <Scene key="categoryScreen" component={CategoryScreen} />

    <Scene key="placesScreen" component={PlacesScreen} initial />
  </Scene>,
);

export default Scenes;
