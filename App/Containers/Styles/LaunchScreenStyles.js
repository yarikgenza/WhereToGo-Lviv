import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#2b323b'
  },
  headingContainer: {
    flex: 0.45,
    backgroundColor: '#2b323b',
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    fontSize: 44,
    fontFamily: 'Roboto'
  },
  headingName: {
    color: '#fac308',
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
    backgroundColor: '#2b323b'
  },
  nextButton: {
    padding: 15,
    backgroundColor: '#fac308',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#2b323b',
    fontSize: 17
  }
})
