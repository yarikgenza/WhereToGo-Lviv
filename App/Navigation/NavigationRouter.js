import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LocationScreen from '../Containers/LocationScreen'
import CategoryScreen from '../Containers/Places/CategoryScreen';

import NavBar from './NavBar'

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene initial key='launchScreen' component={LaunchScreen} hideNavBar/>
        <Scene key='locationScreen' component={LocationScreen} hideNavBar/>

        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={{ opacity: 0}}>
            <Scene initial key='categoryScreen' component={CategoryScreen} />
          </Scene>
        </Scene>

      </Router>
    )
  }
}

export default NavigationRouter
