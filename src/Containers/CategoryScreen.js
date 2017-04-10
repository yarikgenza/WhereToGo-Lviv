import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hello world</Text>
          <Button><Text>Some button...</Text></Button>
        </Content>
      </Container>
    );
  }
}

export default CategoryScreen;
