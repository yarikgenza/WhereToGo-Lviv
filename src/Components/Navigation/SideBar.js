import React, { Component } from 'react';
import { Container, Content, View, List, Text, ListItem, Icon, Left, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { changeRoute, closeDrawer } from '../../Redux/Actions/ui';
import { Image } from 'react-native';
import styles from './Styles/SideBarStyles';
import vars from '../../Themes/variables/platform';

const logo = require('../../Images/main.logo.png');

const rows = [
  {
    name: 'Places',
    route: 'placesScreen',
    icon: 'ios-pin',
  },
  {
    name: 'Events',
    route: 'eventsScreen',
    icon: 'flag',
  },
  {
    name: 'History',
    route: 'historyScreen',
    icon: 'md-checkmark-circle-outline',
  },
  {
    name: 'Profile',
    route: 'profileScreen',
    icon: 'ios-contact',
  },
  {
    name: 'Settings',
    route: 'settingsScreen',
    icon: 'ios-settings',
  },
  {
    name: 'Help',
    route: 'heplScreen',
    icon: 'ios-help-circle',
  },
];

class SideBar extends Component {

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.changeRoute(route);
    Actions[route]();
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff' }}
        >
          <View style={styles.drawerCover}>
            <Image style={styles.drawerImage} source={require('../../Images/main.logo.png')} />
            <Text style={styles.headingText}>Where to go?</Text>
          </View>

          <List
            dataArray={rows} key={this.props.ui.route} renderRow={row => (
              <ListItem button onPress={() => this.navigateTo(row.route)}>
                <Left>
                  <Icon active name={row.icon} style={{ color: vars.defaultBackgroundColor, fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>{row.name}</Text>
                </Left>
                { this.props.ui.route === row.route ? (
                  <Right style={{ flex: 1 }}>
                    <Icon active name="md-radio-button-off" style={{ color: vars.defaultBackgroundColor, fontSize: 20, width: 30 }} />
                  </Right>
                ) : null}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  changeRoute: route => dispatch(changeRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
