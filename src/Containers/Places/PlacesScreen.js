import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';


class PlacesScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#2b323b' }}>
        <NavBar title="Places search" filter="category" />
        <Content style={{ height: 500 }}>
          <Text>{this.props.places.category}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
