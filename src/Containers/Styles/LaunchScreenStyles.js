import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headingContainer: {
    flex: 0.45,
    backgroundColor: Colors.background,
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    fontSize: 44,
    fontFamily: 'Roboto'
  },
  headingName: {
    color: Colors.yellowText,
    paddingTop: 50,
    fontSize: 52,
    fontFamily: 'Roboto'
  },
  logoBlock: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 175,
    height: 150,
    backgroundColor: Colors.background
  },
  nextButton: {
    padding: 15,
    backgroundColor: Colors.yellowText,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.background,
    fontSize: 17
  }
})
