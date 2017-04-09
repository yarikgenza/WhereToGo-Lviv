import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

import { connect } from 'react-redux';
import { setLocation, setFormatted } from '../Redux/Actions/location';

import NativeFeedbackButton from '../Components/NativeFeedbackButton';
import Images from '../Themes/images';

import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {

  handleNextButtonPress() {
    Actions.locationScreen();
  }

  componentDidMount() {
    setInterval(() => {
      this.props.setLocation('123', 'test');
      this.props.setFormatted(`traliaia`)
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="pulse" iterationCount="infinite" useNativeDriver style={styles.logoBlock}>
          <Image
            style={styles.logo}
            source={Images.logo}
          />
        </Animatable.View>
        <View style={styles.headingContainer}>
          <Animatable.Text
            style={styles.heading}
            delay={100}
            animation="bounceInUp"
            useNativeDriver
            iterationCount={1}
          >
              {this.props.longitude}Where to go? {this.props.formatted}{this.props.latitude}
          </Animatable.Text>
          <Animatable.Text
            style={styles.headingName}
            delay={500}
            animation="bounceInDown"
            useNativeDriver
            iterationCount={1}
            direction="alternate"
          >
              Lviv
          </Animatable.Text>
        </View>
        <NativeFeedbackButton
          onPress={() => this.handleNextButtonPress()}
          title="start exploring"
          styles={styles.nextButton}
          textStyles={styles.buttonText}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { location: { latitude, longitude, formatted } } = state;
  return {
    latitude,
    longitude,
    formatted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (latitude, longitude) => dispatch(setLocation(latitude, longitude)),
    setFormatted: (formatted) => dispatch(setFormatted(formatted))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
