import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headingContainer: {
    flex: 0.6,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingContainerDone: {
    flex: 0.8,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinnerContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  errTextContainer: {
    flex: 0.4,
    backgroundColor: Colors.background,
    alignItems: 'center'
  },
  headingText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 42,
    padding: 15,
    color: 'white'
  },
  formattedLocation: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: 'white',
    fontSize: 26,
    padding: 50,
    paddingTop: 70
  },
  headingTextMarked: {
    fontFamily: 'Baskerville-SemiBold',
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.yellowText
  },
  headingTextMarkedDone: {
    fontFamily: 'Baskerville-SemiBold',
    fontSize: 38,
    padding: 50,
    fontWeight: 'bold',
    color: Colors.yellowText
  },
  infoButton: {
    padding: 15,
    backgroundColor: Colors.yellowText,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.background,
    fontSize: 17
  },
  errText: {
    fontFamily: 'Baskerville-SemiBold',
    fontSize: 25,
    fontWeight: 'normal',
    color: 'white'
  }
})
