import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { _getPhotoUrl } from '../../Api/places.api';
import styles from './PlaceCardStyles';

class PlaceCard extends Component {

  loadImage(place) {
    return place.photos ? _getPhotoUrl(place.photos[0].photo_reference) : null;
  }

  renderStars(place) {
    let arr = [];
    if (place.rating) {
      for (let i = 0; i < Math.round(place.rating); i++) {
        arr.push(<Icon key={i} style={styles.starIcon} name="ios-star"/>)
      }
    } return arr;
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
            <Text style={{ color: 'white'}}>{place.name}</Text>
            <Text style={{ color: 'white'}}>{this.renderStars(place)}</Text>
          </CardItem>
        </Card>
      );
    }
    return null;
  }
}

export default PlaceCard;
