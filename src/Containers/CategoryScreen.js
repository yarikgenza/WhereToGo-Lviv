import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hello world</Text>
          <Button><Text>Some button...</Text></Button>
          <Text>Food and drink</Text>
          <Text>Places to visit</Text>
          <Text>Entertainment</Text>
        </Content>
      </Container>
    );
  }
}

export default CategoryScreen;
