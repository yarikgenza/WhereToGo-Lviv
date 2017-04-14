const React = require('react-native');
import vars from '../../../Themes/variables/platform';

const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    backgroundColor: vars.defaultBackgroundColor,
  },
  headingText: {
    color: 'white',
    fontSize: 32,
    paddingTop: (deviceHeight / 4) - 10,
  },
  drawerCover: {
    alignSelf: 'stretch',
    backgroundColor: vars.defaultBackgroundColor,
    // resizeMode: 'cover',
    height: deviceHeight / 3,
    width: null,
    alignItems: 'center',
    position: 'relative',
  },
  drawerImage: {
    position: 'absolute',
    // left: (Platform.OS === 'android') ? 30 : 40,
    left: (Platform.OS === 'android') ? deviceWidth / 12 : deviceWidth / 9,
     // top: (Platform.OS === 'android') ? 45 : 55,
    // top: (Platform.OS === 'android') ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 145,
    resizeMode: 'cover',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: (Platform.OS === 'android') ? 7 : 5,
  },
  sidebarIcon: {
    fontSize: 21,
    color: '#fff',
    lineHeight: (Platform.OS === 'android') ? 21 : 25,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  text: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
  },
  badgeText: {
    fontSize: (Platform.OS === 'ios') ? 13 : 11,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: (Platform.OS === 'android') ? -3 : undefined,
  },
};
