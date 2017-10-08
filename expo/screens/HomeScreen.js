import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { 
  WebBrowser,
} from 'expo';

import { MonoText } from '../components/StyledText';


class NewsEntry extends React.Component {
  render() {
    return (
      <View style={styles.newsEntry}>
        <View style={{flexDirection: 'row'}}>
          
          {/*Left*/}
          <View>
            <View style={styles.container}>
            <Image
              source={
                  require('../assets/images/robot-dev.png')
              }
            />
            </View> 
            <Text style={styles.sourceLeft}>Source</Text>
            <Text style={styles.timeLeft}>Hours</Text>
            <Text style={styles.titleLeft}>Title</Text>
            <View style={styles.shareContainer}>
              <View>
                <Image
                  source={
                      require('../assets/images/share.png')            
                  }
                  style={styles.littlebuttons}
                />
              </View>
              <View>
                <Image
                  source={
                      require('../assets/images/bookmark.png')            
                  }
                  style={styles.littlebuttons}
                />
              </View>
            </View>             
          </View>
          
          <View style={styles.spacer}></View>

          {/*Right*/}
          <View style={styles.container}>
            <Image
              source={
                  require('../assets/images/robot-dev.png')
              }
            />
            <Text style={styles.sourceRight}>Source</Text>
            <Text style={styles.timeRight}>Hours</Text>
            <Text style={styles.titleRight}>Title</Text>
            <View style={styles.shareContainer}>
              <View>
                <Image
                  source={
                      require('../assets/images/share.png')            
                  }
                  style={styles.littlebuttons}
                />
              </View>
              <View>
                <Image
                  source={
                      require('../assets/images/bookmark.png')            
                  }
                  style={styles.littlebuttons}
                />
              </View>
            </View>             
          </View>

        
        </View>
      </View>
    )
  }
}


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.padded}>

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.datetext}>Take3</Text>
                <Text style={styles.header}>Positive Post</Text>
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
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <NewsEntry></NewsEntry>
            <NewsEntry></NewsEntry>
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
  centeredline: {
    textAlign: 'center',
  },
  datetext: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'circular-book',
    color: 'rgb(74, 74, 74)',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'circular-bold',
    color: 'rgb(74, 74, 74)',
  },
  logo: {
    width: 60,
    height: 60,
    padding: 30,
  },
  spacer: {
    flex: 0.1,
  },
  sourceLeft: {
    flex: 0.4,
    fontSize: 14,
    fontFamily: 'circular-medium',
    color: 'rgb(90,182,161)',
  },
  sourceRight: {
    flex: 0.4,
    fontSize: 14,
    fontFamily: 'circular-medium',
    color: 'rgb(90,182,161)',
  },
  timeLeft: {
    flex: 0.4,
    fontSize: 12,
    fontFamily: 'circular-book',
  },
  timeRight: {
    flex: 0.4,
    fontSize: 12,
    fontFamily: 'circular-book',
  },
  titleLeft: {
    paddingTop: 10, 
    paddingBottom: 10,
    flex: 0.4,
    fontSize: 18,
    fontFamily: 'circular-book',
  },
  titleRight: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 0.4,
    fontSize: 18,
    fontFamily: 'circular-book',
  },
  littlebuttons: {
    width: 16,
    height: 22,
    paddingLeft: 30,    
    resizeMode: 'contain',

  },
  shareContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  newsEntry: {
    paddingTop: 20,
    paddingBottom: 20,
  }
});
