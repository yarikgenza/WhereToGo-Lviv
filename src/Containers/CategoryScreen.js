import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { TouchableOpacity as Button } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Content, Text, Icon, Card, View } from 'native-base';
import * as Animatable from 'react-native-animatable';
import vars from '../Themes/variables/platform';
import styles from './Styles/CategoryScreenStyles';

import categories from '../Services/categoryService';
import { setCategory } from '../Redux/Actions/places';

class CategoryScreen extends Component {

  handleCardPress(code) {
    this.props.setCategory(code);
    Actions.placesScreen();
  }

  render() {
    const renderCards = row => row.map((item, index) => (
      <Card key={index} style={styles.card}>
        <Animatable.View animation="swing" delay={600} duration={1500} iterationCount={1}>
          <Button onPress={() => this.handleCardPress(item.code)}>
            <Icon name={item.icon} style={styles.cardIcon} />
            <Text style={styles.cardText}>{item.title}</Text>
          </Button>
        </Animatable.View>
      </Card>
      ));

    return (
      <Container style={styles.container}>
        <Grid>
          <Row size={3}>
            <View style={styles.headingContainer}>
              <Animatable.View animation="slideInLeft" duration={1500} delay={100} iterationCount={1} useNativeDriver>
                <Text style={{ color: 'white', fontSize: 44, padding: 10 }}><Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>Where</Text> would you</Text>
              </Animatable.View>
              <Animatable.View animation="slideInRight" iterationCount={1} useNativeDriver>
                <Text style={{ color: 'white', fontSize: 44 }}>like <Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>to go</Text>?</Text>
              </Animatable.View>
            </View>
          </Row>
          <Row size={1}>
            {renderCards(categories[0])}
          </Row>
          <Row size={1}>
            {renderCards(categories[1])}
          </Row>
          <Row size={1.5}>
            <View style={styles.headingContainer}>
              <Icon style={{ fontSize: 40, color: vars.defaultOrangeTextColor }} name="ios-navigate-outline" />
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
