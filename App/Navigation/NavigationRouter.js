import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen';
import LocationScreen from '../Containers/LocationScreen';

import CategoryScreen from '../Containers/Places/CategoryScreen';

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} hideNavBar/>
            <Scene key='locationScreen' component={LocationScreen} hideNavBar/>

            <Scene key='drawer' component={NavigationDrawer} open={false}>
              <Scene key='categoryScreen' component={CategoryScreen}/>
            </Scene>

          </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
