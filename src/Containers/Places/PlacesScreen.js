import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';


class PlacesScreen extends Component {
  render() {
    return (
      <Container>
        <NavBar title="Places search" filter='category' />
        <Text>{this.props.places.category}</Text>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
      places: state.places
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
