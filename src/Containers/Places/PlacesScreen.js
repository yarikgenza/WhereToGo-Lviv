import React, { Component } from 'react';
import { Container, Content, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';

import { fetchNearby } from '../../Redux/Actions/places';

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
    } else if (nextProps.places.error !== this.props.places.error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  fetchPlacesNearby() {
    const { latitude, longitude } = this.props.location;

    this.props.fetchNearby({
      lat: latitude,
      lon: longitude,
      keyword: 'restaurant',
    });
  }

  componentDidMount() {
    if (this.props.places.data) {
      this.setState({
        isLoading: false,
      });
    } else {
      this.fetchPlacesNearby();
    }
  }

  render() {
    const { isLoading } = this.state;
    const { places } = this.props;

    return (
      <Container style={{ backgroundColor: '#2b323b' }}>
        <NavBar title="Places search" filter="category" />
        <Content>
          { isLoading ? <Spinner /> : (
            <Text style={{ color: 'white' }}>{JSON.stringify(places.data)} {places.error}</Text>)
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  fetchNearby: config => dispatch(fetchNearby(config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
