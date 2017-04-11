import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';


class PlacesScreen extends Component {
  render() {

      return (
            <Container>
              <NavBar title="Places search" />
            </Container>
        );
  }
}

const mapStateToProps = (state) => {
  return  {
      state: state.places
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
