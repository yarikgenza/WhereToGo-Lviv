import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Content, Text, Icon, Card } from 'native-base';
import * as Animatable from 'react-native-animatable';
import vars from '../Themes/variables/platform';
import styles from './Styles/CategoryScreenStyles';

import categories from '../Services/categoryService';
import { setCategory } from '../Redux/Actions/places';

class CategoryScreen extends Component {

  handleCardPress(code) {
    this.props.setCategory([code]);
    Actions.placesScreen();
  }

  render() {
    const renderCards = () => categories.map((category, index) => (
      <Card key={index} style={{ alignItems: 'center', justifyContent: 'center', borderColor: 'transparent', backgroundColor: vars.defaultBackgroundColor }}>
        <Animatable.View animation="swing" delay={600} duration={1500} iterationCount={1}>
          <TouchableOpacity onPress={() => this.handleCardPress(category.code)}>
            <Icon name={category.icon} style={{ alignSelf: 'center', fontSize: 50, color: vars.defaultOrangeTextColor, padding: 7 }} />
            <Text style={{ alignSelf: 'center', color: 'white' }}>{ category.title }</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Card>
      ));

    return (
      <Container style={{ backgroundColor: vars.defaultBackgroundColor }}>
        <Grid>

          <Row size={3}>
            <View style={styles.headingContainer}>
              <Animatable.View animation="slideInLeft" duration={1500} delay={300} iterationCount={1} useNativeDriver>
                <Text style={{ color: 'white', fontSize: 44, padding: 10 }}><Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>Where</Text> would you</Text>
              </Animatable.View>
              <Animatable.View animation="slideInRight" iterationCount={1} useNativeDriver>
                <Text style={{ color: 'white', fontSize: 44 }}>love <Text style={{ fontSize: 44, color: vars.defaultOrangeTextColor }}>to go</Text>?</Text>
              </Animatable.View>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
