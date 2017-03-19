import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import NativeFeedbackButton from '../Components/NativeFeedbackButton';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  handleNextButtonPress() {
    alert('hello)')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <Image
            style={styles.logo}
            source={Images.logo}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Where to go?</Text>
          <Text style={styles.headingName}>Lviv</Text>
        </View>
        <NativeFeedbackButton
          onPress={() => this.handleNextButtonPress}
          title='start exploring now'
          styles={styles.nextButton}
          textStyles={styles.buttonText} />
      </View>
    )
  }
}
