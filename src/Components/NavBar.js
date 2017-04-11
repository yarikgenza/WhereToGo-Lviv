import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Button, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


const NavBar = ({ title, icon = 'menu' }) => (
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
          </Right>
      </Header>
  </Container>
)

export default NavBar;
