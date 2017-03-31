import React, { Component } from 'react'
import { View, Text } from 'react-native'
import NavBar from '../../Navigation/NavBar'

class CategoryScreen extends Component {
  render () {
    return (
      <View>
        <NavBar title='Сategories' button='hamburger' />
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default CategoryScreen
