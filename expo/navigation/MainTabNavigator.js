import React from 'react';
import { 
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SettingsScreen from '../screens/SettingsScreen';


export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: <Image source={require('../assets/icons/homeIcon.png')}/>,
      showIcon: true
    }
  },
  Categories: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: <Image source={require('../assets/icons/categoriesIconInactive.png')}/>,
      showIcon: true
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: <Image source={require('../assets/icons/profileInactiveIcon.png')}/>,
      showIcon: true
    }
  }
},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    showLabel: false,
    animationEnabled: true,
    swipeEnabled: false,
  
});
