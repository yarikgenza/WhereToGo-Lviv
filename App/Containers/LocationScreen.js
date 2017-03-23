import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import LocationActions from '../Redux/LocationRedux'
import { connect } from 'react-redux'

import NativeFeedbackButton from '../Components/NativeFeedbackButton';
import styles from './Styles/LocationScreenStyles'

class LocationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationReady: false,
      error: ''
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         const { longitude, latitude } = position.coords;
         this.setState({
           isLocationReady: true
         })
         this.props.setLocation(latitude, longitude);
       },
       (error) => this.handleLocationError(error),
       {enableHighAccuracy: true, timeout: 45000, maximumAge: 1000}
     )
  }

  handleLocationError(error) {
    if (error === "No available location provider.") {
      this.setState({
        error: "Please, turn-on GPS"
      })
    } else if (error === "Location request timed out"){
      this.setState({
        error: "Please, try go outside and try again"
      })
    } else if (error === "No Internet"){
      this.setState({
        error: "No internet connection"
      })
    }
  }

  /*getFormattedLocation() {
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
  }*/

  render() {
    const { state: { lat, lon, formatted } } = this.props;
    const { isLocationReady, error } = this.state;

    /*return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{isLocationReady ? 'Done!' : 'Waiting your'}</Text>
          <Text style={styles.headingTextMarked}>{isLocationReady ? "" : 'location...'}</Text>
          { isLocationReady ? '' : (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size={75} />
            </View>
          )}
          <View style={styles.infoButton}>
            <Text style={styles.buttonText}>JUST A MOMENT...</Text>
         </View>
        </View>
      </View>
    )*/

    return(
      <View style={styles.container}>
      { isLocationReady ? (
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Done!</Text>
          <Text style={styles.formattedLocation}>{this.state.formatted}</Text>
        </View>
      ) : (
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{error === '' ? 'Waiting your' : "Can't get your"}</Text>
          <Text style={styles.headingTextMarked}>{ error === '' ? 'location' : 'location =('}</Text>
        </View>
      )}
        { (isLocationReady || error !== '') ? null : (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size={75} />
          </View>
        )}
        { error === '' ? null : (
          <View style={styles.errTextContainer}>
            <Text style={styles.errText}>{this.state.error}</Text>
          </View>
        )}
        { isLocationReady ? (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()} >
            <View style={styles.infoButton}>
              <Text style={styles.buttonText}>SEARCH PLACES NEAR YOU</Text>
            </View>
         </TouchableNativeFeedback>
        ) : (
          <View style={styles.infoButton}>
            <Text style={styles.buttonText}>{ error === '' ? 'JUST A MOMENT...' : 'try again'}</Text>
         </View>
        )
        }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)
