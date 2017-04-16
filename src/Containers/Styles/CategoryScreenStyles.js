import vars from '../../Themes/variables/platform';

export default {
  container: {
    backgroundColor: vars.defaultBackgroundColor,
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.defaultBackgroundColor,
    alignItems: 'center',
    padding: 25,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    backgroundColor: vars.defaultBackgroundColor,
  },
  cardIcon: {
    alignSelf: 'center',
    fontSize: 50,
    color: vars.defaultOrangeTextColor,
    padding: 5,
  },
  cardText: {
    alignSelf: 'center',
    color: 'white',
  },
};
