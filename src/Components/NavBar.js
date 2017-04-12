import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Button, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import categories from '../Services/categoryService';

const showFilter = (object) => {
  if (object === 'category') {
    const payload = categories.map(item => item.code);
    alert(payload);
  }
}

const NavBar = ({ title, icon = 'menu', filter, search }) => (
  <Container>
      <Header>
          <Left>
           { icon === 'menu' ? (
             <Button transparent>
               <Icon name='menu' />
             </Button>
           ) : (
             <Button onPress={() => Actions.pop()} transparent>
               <Icon name='arrow-back' />
            </Button>
           )}
          </Left>
          <Body>
              <Title>{title}</Title>
          </Body>
          <Right>
            { filter ? (
              <Button onPress={() => showFilter(filter)} transparent>
                <Icon name='ios-funnel' />
              </Button>
            ) : null }
          </Right>
      </Header>
  </Container>
)

export default NavBar;
