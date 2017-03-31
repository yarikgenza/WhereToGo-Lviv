import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import NavItems from './NavItems'
import styles from './Styles/NavBarStyles'
import { Metrics } from '../Themes'

class NavBar extends Component {

  constructor (props) {
    super(props);
  }

  renderMiddle () {
      return (
        <Text style={styles.title}>Category</Text>
      )
  }

  renderRightButtons () {
    return <View style={{width: Metrics.icons.medium}} />
  }

  renderLeftButtons () {
      return (
        <View style={styles.leftButtons}>
          {NavItems.hamburgerButton()}
        </View>
      )
  }

  render () {

    return (
      <View style={styles.container}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

export default NavBar
