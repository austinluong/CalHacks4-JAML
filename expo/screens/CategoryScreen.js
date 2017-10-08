import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Slider,
  TouchableOpacity,
} from 'react-native';

class ChangeState extends React.Component {

  constructor(props) {
    super(props);
    this.state = { uri: require('../assets/images/zeroStatePlusIcon.png') }
  }

  changeLogo() {
    this.setState({
      uri: require('../assets/images/activeStateCategoryIcon.png')
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.changeLogo()}>
        <View style={styles.stateContainer}>
        <View style={{flexDirection: 'row-reverse'}}>
            <Image
              source={
                  this.state.uri            
              }   
              style={styles.state}>
            </Image>         
        </View> 
        </View>
      </TouchableOpacity>

    )


  }
}

class SelectionEntry extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={
                require('../assets/images/circle-xxl.png')            
            }   
            style={styles.circle}>
            <View>
              <Image
                source={this.props.image} 
                style={styles.icon}
              />
            </View> 
          </Image>         
        </View>

        <Text style={styles.category}>
          {this.props.label}
        </Text>

        <ChangeState />
        
      </View>
    )
  }
}

export default class CategoryScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.padded}>

          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View>
              <Text style={styles.header}>Categories</Text>
            </View>
            <View>
              <Image
                source={
                    require('../assets/images/logo.png')
                }
                style={styles.logo}
              />
            </View> 
          </View>

          <View
            style={{
              borderBottomColor: 'rgb(151, 151, 151)',
              borderBottomWidth: 1,
              paddingTop: 5,
            }}
          />
          <Text style={styles.regular}>

          </Text>

          <SelectionEntry label="Gaming" image={require('../assets/images/gameboy.png')}></SelectionEntry>
          <SelectionEntry label="General" image={require('../assets/images/us.png')}></SelectionEntry>
          <SelectionEntry label="Education" image={require('../assets/images/education.png')}></SelectionEntry>
          <SelectionEntry label="Business" image={require('../assets/images/business.png')}></SelectionEntry>
          <SelectionEntry label="Technology" image={require('../assets/images/technology.png')}></SelectionEntry>
          <SelectionEntry label="Entertainment" image={require('../assets/images/entertainment.png')}></SelectionEntry>
          <SelectionEntry label="Sports" image={require('../assets/images/sports.png')}></SelectionEntry>
          <SelectionEntry label="Science & Nature" image={require('../assets/images/science.png')}></SelectionEntry>
          <SelectionEntry label="Music" image={require('../assets/images/music.png')}></SelectionEntry>
        </View>
      </ScrollView>

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
    paddingVertical: 5,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'circular-book',
    color: 'rgb(74, 74, 74)',
  },
  category: {
    fontSize: 26,
    height:70,
    width: 200,
    textAlign: 'left',
    fontFamily: 'circular-book',
    color: 'rgb(74, 74, 74)',
    paddingVertical:20,
    paddingLeft: 20,
  },
  header: {
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'circular-bold',
    color: 'rgb(74, 74, 74)',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    padding: 20,
    flex: 0.1,
  },
  circle: {
    width:60,
    height:60,
    padding: 10,
    resizeMode: 'contain',
  }, 
  stateContainer: {
    padding: 10,
  },
  state: {
    width: 45,
    height: 45,
    alignItems: 'flex-end',
    resizeMode: 'contain',
  },
  logo: {
    width: 41,
    height: 37.4,
    justifyContent: 'flex-start',
  },
});