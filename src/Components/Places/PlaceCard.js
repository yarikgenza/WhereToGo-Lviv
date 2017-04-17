import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { _getPhotoUrl } from '../../Api/places.api';
import styles from './PlaceCardStyles';
import StarRating from '../StarRating';

class PlaceCard extends Component {

  loadImage(place) {
    return place.photos ? _getPhotoUrl(place.photos[0].photo_reference) : null;
  }

  render() {
    const { place } = this.props;

    if (place.photos) {
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
            <Text style={{ color: 'white' }}>{place.name}</Text>
            <StarRating
              maxStars={5}
              rating={place.rating}
              disabled
              starSize={20}
            />
          </CardItem>
        </Card>
      );
    }
    return null;
  }
}

export default PlaceCard;
