import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  SectionList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <ExpoConfigView />;
  }
}
