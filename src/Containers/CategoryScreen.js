import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Content, Text, Icon, Card } from 'native-base';
import vars from '../Themes/variables/platform';
import styles from './Styles/CategoryScreenStyles';

const cards = [
  {
    title: 'Food and Drink',
    icon: 'ios-pizza',
    code: 'food',
  },
  {
    title: 'Places to visit',
    icon: 'ios-flag',
    code: 'places_to_visit',
  },
  {
    title: 'Entertainment',
    icon: 'md-wine',
    code: 'entertainment',
  },
];

class CategoryScreen extends Component {

  handlePress(code) {
    alert(`${code} was pressed`);
  }

  render() {
    const renderCards = () => cards.map((card, index) => (
      <Card key={index} style={{ alignItems: 'center', justifyContent: 'center', borderColor: 'transparent', backgroundColor: vars.defaultBackgroundColor }}>
        <TouchableOpacity onPress={() => this.handlePress(card.code)}>
          <Icon name={card.icon} style={{ alignSelf: 'center', fontSize: 50, color: vars.defaultOrangeTextColor, padding: 7 }} />
          <Text style={{ alignSelf: 'center', color: 'white' }}>{ card.title }</Text>
        </TouchableOpacity>
      </Card>
      ));

    return (
      <Container style={{ backgroundColor: vars.defaultBackgroundColor }}>
        <Grid>

          <Row size={3}>
            <View style={styles.headingContainer}>
              <Text style={{ color: 'white', fontSize: 44, padding: 10 }}><Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>Where</Text> would you</Text>
              <Text style={{ color: 'white', fontSize: 44 }}>love <Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>to go</Text>?</Text>
            </View>
          </Row>

          <Row size={1}>
            {renderCards()}
          </Row>

          <Row size={1} />

        </Grid>

      </Container>
    );
  }
}

export default CategoryScreen;
