import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {Actions} from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable';

import NativeFeedbackButton from '../Components/NativeFeedbackButton';
import { Images } from '../Themes';

import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  handleNextButtonPress() {
    Actions.locationScreen();
  }

  render () {
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
            iterationCount={1}>
              Where to go?
          </Animatable.Text>
          <Animatable.Text style={styles.headingName}
            delay={500}
            animation="bounceInDown"
            useNativeDriver
            iterationCount={1}
            direction="alternate">
              Lviv
          </Animatable.Text>
        </View>
        <NativeFeedbackButton
          onPress={() => this.handleNextButtonPress()}
          title='start exploring'
          styles={styles.nextButton}
          textStyles={styles.buttonText} />
      </View>
    )
  }
}
