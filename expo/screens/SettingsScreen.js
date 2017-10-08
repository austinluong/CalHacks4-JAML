import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';

class SliderEntry extends React.Component {
  render() {
    return (
      <View style={styles.sliderEntry}>
        <Text style={styles.sliderLabel}>
          {this.props.label}
        </Text>
        <Slider maximumTrackTintColor="#ffa600" thumbTintColor="#ffa600" />
      </View>
    )
  }
}

export default class SettingsScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.padded}>
          <Text style={styles.header}>Settings</Text>
          <View
            style={{
              borderBottomColor: 'rgb(151, 151, 151)',
              borderBottomWidth: 1,
              paddingTop: 5,
            }}
          />
          <Text style={styles.regular}>
            Curate your newsfeed by adjusting the filters below.
          </Text>

          <SliderEntry label="Positivity"></SliderEntry>
          <SliderEntry label="Likes"></SliderEntry>
          <SliderEntry label="Trustworthiness"></SliderEntry>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  padded: {
    flex:1,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 30,
  },
  regular: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'circular-book',
    color: 'rgb(74, 74, 74)',
  },
  sliderLabel: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'circular-book',
    color: 'rgb(74, 74, 74)',
    paddingBottom: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'circular-bold',
    color: 'rgb(74, 74, 74)',
  },
  sliderEntry: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});
