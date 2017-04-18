import { Dimensions } from 'react-native';
import vars from '../../Themes/variables/platform';

export default {
  img: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 3.5,
  },
  starIcon: {
    color: vars.defaultOrangeTextColor,
    fontSize: vars.iconSizeMedium,
  },
  name: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    paddingTop: 5,
    paddingLeft: 15,
  },
  distance: {
    color: 'white',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  time: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 15,
    paddingBottom: 5,
  },
  walkIcon: {
    color: vars.defaultOrangeTextColor,
    paddingLeft: 20,
    paddingBottom: 5,
  },
};
