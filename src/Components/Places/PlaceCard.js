import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { Dimensions } from 'react-native';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { _getPhotoUrl } from '../../Api/places.api';

class PlaceCard extends Component {

  loadImage(place) {
    if (place.photos) {
      return _getPhotoUrl(place.photos[0].photo_reference);
    }
    return null;
  }

  render() {
    const { place } = this.props;

    return (
      <Card>
        <CardItem cardBody>
          <ResponsiveImage
            source={{ uri: this.loadImage(place) }}
            initWidth={styles.img.width}
            initHeight={styles.img.height}
          />
        </CardItem>
        <CardItem content>
          <Text>{place.name}</Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  img: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 3.5,
  },
};
export default PlaceCard;
