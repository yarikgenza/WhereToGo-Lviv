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
};
