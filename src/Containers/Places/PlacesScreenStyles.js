import { StyleSheet, Dimensions } from 'react-native';
import vars from '../../Themes/variables/platform';

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    backgroundColor: vars.defaultBackgroundColor,
  },
  spinner: {
    paddingTop: (deviceHeight) / 2.7,
  },
  moreButton: {
    height: 60,
  },
};
