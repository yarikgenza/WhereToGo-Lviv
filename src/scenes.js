import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScreen from './Containers/LaunchScreen';
import LocationScreen from './Containers/LocationScreen';
import CategoryScreen from './Containers/CategoryScreen';

import PlacesScreen from './Containers/Places/PlacesScreen';
import EventsScreen from './Containers/Events/EventsScreen';

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="launchScreen" component={LaunchScreen} panHandlers={null} />
    <Scene key="locationScreen" component={LocationScreen} panHandlers={null} />
    <Scene key="categoryScreen" component={CategoryScreen} panHandlers={null} />

    <Scene key="placesScreen" component={PlacesScreen} initial panHandlers={null} />
    <Scene key="eventsScreen" component={EventsScreen} panHandlers={null} />
  </Scene>,
);

export default Scenes;
