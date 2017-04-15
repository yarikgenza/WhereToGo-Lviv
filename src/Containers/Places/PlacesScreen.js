import React, { Component } from 'react';
import { Container, Content, Text, Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';
import PlaceCard from '../../Components/Places/PlaceCard';
import { fetchNearby } from '../../Redux/Actions/places';
import styles from './PlacesScreenStyles';

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

    const renderList = () => places.data.results.map((place, index) => (
      <PlaceCard key={index} place={place} />
    ));

    return (
      <Container style={styles.container}>
        <NavBar title="Places search" filter="category" />
        <Content padder>
          { isLoading ? (
            <View style={styles.spinner}>
              <Spinner />
            </View>
          ) : renderList() }
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
  fetchNearby: params => dispatch(fetchNearby(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
