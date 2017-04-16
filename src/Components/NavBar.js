import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Left, Right, Body, Button, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { openDrawer } from '../Redux/Actions/ui';

import Filter from './Filter';
import categories from '../Services/categoryService';

class NavBar extends Component {

  constructor() {
    super();
  }

  showFilter(object) {
    if (object === 'category') {
      const payload = categories.map(item => item.code);
      alert(payload);
    }
  }

  render() {
    const { title, icon = 'menu', filter, search } = this.props;

    return (
      <Header>
        <Left>
          { icon === 'menu' ? (
            <Button onPress={() => this.props.openDrawer()} transparent>
              <Icon name="menu" />
            </Button>
               ) : (
                 <Button onPress={() => Actions.pop()} transparent>
                   <Icon name="arrow-back" />
                 </Button>
               )}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          { filter ? <Filter /> : null }
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
