import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, ActionSheet } from 'native-base';

import { filterList, codes } from '../Services/categoryService';
import { fetchNearby, fetchNextNearby } from '../Redux/Actions/places';

class Filter extends Component {

  showSheet() {
    ActionSheet.show({
      options: filterList,
      title: 'Choose category',
    }, id => this.changeCategory(id));
  }

  changeCategory(id) {
    const { latitude, longitude } = this.props.location;
    this.props.fetchNearby({
      lat: latitude,
      lon: longitude,
      keyword: codes[id],
    });
  }

  render() {
    return (
      <Button onPress={() => this.showSheet()} transparent>
        <Icon name="ios-funnel" />
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  fetchNearby: params => dispatch(fetchNearby(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
