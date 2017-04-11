import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/Custom';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center',
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    alignItems: 'center',
    padding: 25,
  },
  heading: {
    color: 'white',
    fontSize: 44,
    fontFamily: 'Roboto',
  },
  headingName: {
    color: Colors.yellowText,
    paddingTop: 50,
    fontSize: 52,
    fontFamily: 'Roboto',
  },
  nextButton: {
    padding: 15,
    backgroundColor: Colors.yellowText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.background,
    fontSize: 17,
  },
});
