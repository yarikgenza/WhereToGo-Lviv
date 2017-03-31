import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/NavBarStyles'
import { Metrics } from '../Themes'

export default NavBar = ({ title, button }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftButtons}>
        {button === 'back' ? NavItems.backButton() : NavItems.hamburgerButton()}
      </View>
      <Text style={styles.title}>{title || 'WhereToGo'}</Text>
      <View style={{width: Metrics.icons.medium}} />
    </View>
  )
}
