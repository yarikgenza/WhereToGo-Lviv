import React, { Component } from 'react';
import { Container, Content, Text, Spinner, View, List, Button } from 'native-base';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar';
import PlaceCard from '../../Components/Places/PlaceCard';
import { fetchNearby, fetchNextNearby } from '../../Redux/Actions/places';
import styles from './PlacesScreenStyles';

class PlacesScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isNextLoading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.places.list !== this.props.places.list) {
      this.setState({
        isLoading: false,
        isNextLoading: false,
      });
    } else if (nextProps.places.error !== this.props.places.error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  fetchPlacesNearby() {
    const { latitude, longitude } = this.props.location;
    const { category } = this.props.places;
    this.props.fetchNearby({
      lat: latitude,
      lon: longitude,
      keyword: category,
    });
  }

  fetchNextResults() {
    this.props.fetchNextNearby({
      pagetoken: this.props.places.nextToken,
    });
    this.setState({
      isNextLoading: true,
    });
  }

  componentDidMount() {
    this.fetchPlacesNearby();
  }

  render() {
    const { isLoading, isNextLoading } = this.state;
    const { places } = this.props;

    const renderMoreButton = () => places.nextToken && !this.state.isLoading ? (
      <View style={styles.moreButton}>
        <Button full disabled={!!isNextLoading} onPress={() => this.fetchNextResults()}>
          <Text>More!</Text>
        </Button>
      </View>) : null;


    return (
      <Container style={styles.container}>
        <NavBar title="Places search" filter="category" />
        <Content padder>
          { isLoading ? (
            <View style={styles.spinner}>
              <Spinner />
            </View>
         ) : (
           <List
             dataArray={this.props.places.list}
             renderRow={(place, index) => (
               <PlaceCard key={index} place={place} />
             )}
           />
         )}
          {renderMoreButton()}
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
  fetchNextNearby: params => dispatch(fetchNextNearby(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
