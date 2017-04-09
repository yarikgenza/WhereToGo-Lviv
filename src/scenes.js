import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import { Container, Text } from 'native-base';

const Home = () => {
  return (
    <Container>
     <Text>Hi from RN</Text>
    </Container>
  )
}

const Scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" title="Home" component={Home} initial />
  </Scene>
);

export default Scenes;
