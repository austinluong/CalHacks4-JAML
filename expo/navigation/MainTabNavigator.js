import React from 'react';
import { 
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import NationalScreen from '../screens/NationalScreen';
import ProfileScreen from '../screens/ProfileScreen';


export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: <Image source={require('../assets/icons/homeIcon.png')}/>,
      showIcon: true
    }
  },
  Unkown: {
    screen: NationalScreen,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: <Image source={require('../assets/icons/categoriesIconInactive.png')}/>,
      showIcon: true
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: <Image source={require('../assets/icons/profileInactiveIcon.png')}/>,
      showIcon: true
    }
  }
},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  
});
