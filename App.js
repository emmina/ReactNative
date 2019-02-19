import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

import List from './src/components/Repository/List';
import Details from './src/components/Repository/Details';
import Profile from './src/components/Profile';
import store from './src/helpers/store';

const Header = createDrawerNavigator({
  Home: {
    screen: List
  },
  Profile: {
    screen: Profile
  },
}, {
    contentComponent: (props) => (
      <View>
        <Text>Custom Header</Text>
        <DrawerItems {...props} />
        <Text>Custom Footer</Text>
      </View>
    )
  }
);

const NavContainer = createAppContainer(Header)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    );
  }
}