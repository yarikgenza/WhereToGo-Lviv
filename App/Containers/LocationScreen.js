import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import LocationActions from '../Redux/LocationRedux'
import { connect } from 'react-redux'

import NativeFeedbackButton from '../Components/NativeFeedbackButton';

import styles from './Styles/LocationScreenStyles'

class LocationScreen extends Component {

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         const { longitude, latitude } = position.coords;
         this.props.setLocation(latitude, longitude);
       },
       (error) => this.handleLocationErr(error),
       {enableHighAccuracy: true, timeout: 45000, maximumAge: 1000}
     )
  }

  getFormattedLocation() {
    const {lat, lon} = this.state;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${config.apiKey}`)
      .then(res => res.json())
        .then((res) => {
          this.setState({
            formattedLocation: res.results[0].formatted_address,
            locationReady: true
          })
        })
      .catch(err => this.handleLocationError('No Internet'))
  }

  render() {
    const { state } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{state.isLocationReady ? 'Done!' : 'Waiting your location'}</Text>
          <Text style={styles.headingTextMarked}>location...{state.lat} and {state.lon}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (lat, lon) => dispatch(LocationActions.locationSet(lat, lon)),
    setFormatted: (location) => dispatch(LocationActions.locationFormattedSet(location)),
    locationError: (message) => dispatch(LocationActions.locationError(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)
