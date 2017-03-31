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

    alert("hi")

    return(
      <View>
       <NavBar/>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>

        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.navBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    statusBarInit: (title) => dispatch(StatusBarActions.statusBarInit(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)
