import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { Card, CardItem, Text, Button, Icon, View } from 'native-base';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-native-easy-grid';
import { _getPhotoUrl } from '../../Api/places.api';
import { getDistance as _getDistance } from '../../Api/distance.api';
import styles from './PlaceCardStyles';
import StarRating from '../StarRating';

class PlaceCard extends Component {

  constructor() {
    super();
    this.state = {
      distance: '',
      duration: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.getDistance();
  }

  loadImage(place) {
    return place.photos ? _getPhotoUrl(place.photos[0].photo_reference) : null;
  }

  getDistance() {
    const { location, place } = this.props;
    const origin = `${location.latitude},${location.longitude}`;
    const destination = `${place.geometry.location.lat},${place.geometry.location.lng}`;
    _getDistance(origin, destination)
      .then((result) => {
	       this.setState({
		         distance: result.distance.text,
		          duration: result.duration.text,
	      });
      })
      .catch(e => alert(e));
  }


  componentDidMount() {
    this.getDistance();
  }

  render() {
    const { place } = this.props;
    const { duration, distance } = this.state;

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
          <CardItem cardBody>
            <View style={styles.icon}><ResponsiveImage
              source={{ uri: place.icon }}
              initWidth={17}
              initHeight={16}
            /></View>
            <Text style={styles.name}>{place.name} </Text>
          </CardItem>
          <CardItem cardBody>
            <Icon name="ios-walk-outline" style={styles.walkIcon} />
            <Text style={styles.distance}>{distance},</Text>
            <Text style={styles.time}>{duration}</Text>
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

const mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
