import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createDrawerNavigator, createAppContainer, DrawerItems, createStackNavigator } from 'react-navigation';

import List from './src/components/Repository/List';
import Profile from './src/components/Profile';
import Details from './src/components/Repository/Details';

import store from './src/helpers/store';

import styles from './style';

const ListItems = createStackNavigator({
    List: { screen: List},
    Details: { screen: Details },
})

const Header = createDrawerNavigator({
  Profile: {
    screen: Profile
  },
  'Repositories': {
    screen: ListItems
  },
}, {
    contentComponent: (props) => (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <DrawerItems {...props} />
        </View>
      </SafeAreaView>
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