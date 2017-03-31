import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import NavBar from '../../Navigation/NavBar'
import StatusBarActions from '../../Redux/StatusBarRedux'

class CategoryScreen extends Component {

  constructor() {
    super();
  }

  render() {

    return(
      <View>
       <NavBar title='Сategories' button="hamburger"/>
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default CategoryScreen
