import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';


class EventsScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#2b323b' }}>
        <NavBar title="Events search" filter="category" />
        <Content style={{ height: 500 }}>
          <Text>Nothing here yet..</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
