import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Content, Text, Icon, Button } from 'native-base';
import vars from '../Themes/variables/platform';

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Grid>
        <Row size={3}>
          <Content>
            <Text style={{ color: 'white'}}>What's more suitable for u?</Text>
          </Content>
        </Row>

        <Row size={1}>

        <Col>
          <Content style={{ borderColor: 'white', borderWidth: 1, padding: 'auto'}}>
            <Icon name='ios-pizza'style={{alignSelf: 'center',fontSize: 50, color: vars.defaultOrangeTextColor}} />
            <Text style={{alignSelf: 'center', color: 'white'}}>Food and Drink</Text>
          </Content>
        </Col>

        <Col>
         <Content>
            <Icon name='ios-flag'style={{alignSelf: 'center',fontSize: 50, color: vars.defaultOrangeTextColor}} />
            <Text style={{alignSelf: 'center', color: 'white'}}>Places to visit</Text>
         </Content>
        </Col>

        <Col>
         <Content>
            <Icon name='md-wine'style={{alignSelf: 'center',fontSize: 50, color: vars.defaultOrangeTextColor}} />
            <Text style={{alignSelf: 'center',color: 'white'}}>Entertainment</Text>
          </Content>
        </Col>

        </Row>
        <Row size={1}></Row>
        </Grid>
      </Container>
    );
  }
}

export default CategoryScreen;
