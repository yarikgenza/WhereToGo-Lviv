import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { closeDrawer } from './Redux/Actions/ui';
import Drawer from 'react-native-drawer';
import SideBar from './Components/Navigation/SideBar';
import scenes from './scenes';

class AppNavigator extends Component {
  render() {
    return (
      <Drawer
        ref={ref => this._drawer = ref}
        type="static"
        openDrawerOffset={0.3}
        tapToClose
        tweenHandler={Drawer.tweenPresets.parallax}
        open={this.props.ui.isDrawerOpen}
        onClose={() => this.props.closeDrawer()}
        content={<SideBar />}
      >
        <Router scenes={scenes} />
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
