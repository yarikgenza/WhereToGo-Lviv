import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, List, Text, ListItem, Icon, Left } from 'native-base';
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
    route: 'footer',
    icon: 'md-checkmark-circle-outline',
  },
  {
    name: 'Profile',
    route: 'badge',
    icon: 'ios-contact',
  },
  {
    name: 'Settings',
    route: 'button',
    icon: 'ios-settings',
  },
  {
    name: 'Help',
    route: 'card',
    icon: 'ios-help-circle',
  },
];

class SideBar extends Component {
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
            dataArray={rows} renderRow={row => (
              <ListItem>
                <Left>
                  <Icon active name={row.icon} style={{ color: vars.defaultBackgroundColor, fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>{row.name}</Text>
                </Left>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
