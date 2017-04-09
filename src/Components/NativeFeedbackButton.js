import React, { Component, PropTypes } from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';

export default class NativeFeedbackButton extends Component {

  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={this.props.styles}>
          <Text style={this.props.textStyles}>{(this.props.title).toUpperCase() || ''}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

NativeFeedbackButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
