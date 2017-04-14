import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';

import { fetch } from '../../Redux/Actions/places';

class PlacesScreen extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.places.data !== this.props.places.data) {
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidMount() {
    this.props.fetch({
      type: 'nearby',
    });
  }

  render() {
    const { isLoading } = this.state;
    const { places } = this.props;

    return (
      <Container style={{ backgroundColor: '#2b323b' }}>
        <NavBar title="Places search" filter="category" />
        <Content style={{ height: 500 }}>
          <Text style={{ color: 'white' }}>{ isLoading ? 'loading..' : 'done.'}</Text>
          <Text style={{ color: 'white' }}>{places.data}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
});

const mapDispatchToProps = dispatch => ({
  fetch: config => dispatch(fetch(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
