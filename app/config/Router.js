import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'react-native-elements'
// import I18n from 'react-native-i18n'

import HomeScreen from '../screens/HomeScreen'
import MeScreen from '../screens/MeScreen'
import ExploreScreen from '../screens/ExploreScreen'

//I18n

/***
  * Tabs
**/
//
export const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  }
}, {
  navigationOptions: {
    headerStyle: {
      height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
      paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
    }
  }
});

export const ExploreStack = StackNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      title: 'Explore'
    }
  }
});

//Me
export const MeStack = StackNavigator({
  Me: {
    screen: MeScreen,
    navigationOptions: {
      title: 'Me'
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="movie" color={tintColor}/>
    }
  },

  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => <Icon name="all-inclusive" color={tintColor}/>, //bubble_chart/visibility/touch_app
    }
  },

  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({tintColor}) => <Icon name="account-circle" color={tintColor}/>
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  // swipeEnabled: false,
  tabBarOptions: {

  }
});

/***
  * Root
**/
export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
