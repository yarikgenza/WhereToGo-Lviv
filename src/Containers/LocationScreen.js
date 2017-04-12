import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { geocoding as geocodingApi } from '../Config';

import { setLocation, setFormatted } from '../Redux/Actions/location';

import NativeFeedbackButton from '../Components/NativeFeedbackButton';
import styles from './Styles/LocationScreenStyles';

class LocationScreen extends Component {

  constructor() {
    super();
    this.state = {
      isLocationReady: false,
      error: '',
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  handleNextButton() {
    Actions.categoryScreen();
  }

  handleTryAgainButton() {
    this.setState({
      isLocationReady: false,
      error: '',
    });
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         const { longitude, latitude } = position.coords;
         this.props.setLocation(latitude, longitude);
         this.setState({
           formatted: 'some street...',
           isLocationReady: true,
         });
         this.props.setFormatted('some street..');
         // this.getFormattedLocation(latitude, longitude)
       },
       error => this.handleLocationError(error),
       { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
     );
  }

  handleLocationError(error) {
    if (error === 'No available location provider.') {
      this.setState({
        error: 'Please, turn-on GPS',
      });
    } else if (error === 'Location request timed out') {
      this.setState({
        error: 'Please, try go outside and try again',
      });
    } else if (error === 'No Internet') {
      this.setState({
        error: 'No internet connection',
      });
    }
  }

  getFormattedLocation(lat, lon) {
    const { baseUrl, apiKey } = geocodingApi;

    fetch(`${baseUrl}?latlng=${lat},${lon}&key=${apiKey}`)
    .then(res => res.json())
      .then((res) => {
        this.setState({
          isLocationReady: true,
        });
        this.props.setFormatted(res.results[0].formatted_address);
      })
      .catch(() => this.handleLocationError('No Internet'));
  }

  render() {
    const { isLocationReady, error } = this.state;
    const { formatted } = this.props;

    return (
      <View style={styles.container}>
        { isLocationReady ? (
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Done!</Text>
            <Text style={styles.formattedLocation}>{ formatted }</Text>
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
          <NativeFeedbackButton
            styles={styles.infoButton}
            onPress={() => this.handleNextButton()}
            textStyles={styles.buttonText}
            title={'Search places near you'}
          />
        ) : (error === '' ? (
          <View style={styles.infoButton}>
            <Text style={styles.buttonText}>JUST A MOMENT...</Text>
          </View>) : (
            <NativeFeedbackButton
              styles={styles.infoButton}
              textStyles={styles.buttonText}
              title={'TRY AGAIN'}
              onPress={() => this.handleTryAgainButton()}
            />
         )
        )
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { location: { formatted } } = state;
  return {
    formatted,
  };
};

const mapDispatchToProps = dispatch => ({
  setLocation: (latitude, longitude) => dispatch(setLocation(latitude, longitude)),
  setFormatted: formatted => dispatch(setFormatted(formatted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
