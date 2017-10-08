import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
} from 'react-native';
import { 
  StackNavigator,
} from 'react-navigation';
import { 
  WebBrowser,
} from 'expo';


import { MonoText } from '../components/StyledText';
import articles from '../assets/articles.json';
var Browser = require('react-native-browser');

class NewsEntry extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.newsEntry} onPress={()=> {
        Expo.WebBrowser.openBrowserAsync(this.props.url);
        }}>
      <View>
          <View>
            <Image
              style={{width: 130, height: 130}}
              source={{uri: this.props.imgURL}}
              />
          </View> 
          <Text style={styles.source}>{this.props.source}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.shareContainer}>
            <View>
              <Image
                source={
                    require('../assets/images/heart.png')            
                }
                style={styles.littlebuttons}
              />
            </View>
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
    </TouchableOpacity>
    )
  }
}

class NewsEntryRow extends React.Component {
  render() {
    return (
      <View style={styles.newsEntryRow}>
        <NewsEntry
          source={this.props.source0}
          time={this.props.time0}
          title={this.props.title0}
          imgURL={this.props.imgURL0}
          url={this.props.url0}
          >
        </NewsEntry>
        <View style={styles.spacer}></View>
        <NewsEntry
          source={this.props.source1}
          time={this.props.time1}
          title={this.props.title1}
          imgURL={this.props.imgURL1}
          url={this.props.url1}
          >
        </NewsEntry>        
      </View>
    )
  }
} 

export default class HomeScreen extends React.Component {
  render() {
    var newsEntryRows = [];
    var limit = 40;
    var article_limit = 50;
    for (var i = 1; i < article_limit - 1; i += 2) {
      if (articles[i].title.length > limit) {
        articles[i].title = articles[i].title.slice(0, limit - 3) + '...';
      }
      if (articles[i + 1].title.length > limit) {
        articles[i + 1].title = articles[i + 1].title.slice(0, limit - 3) + '...';
      }
      newsEntryRows.push(
        <NewsEntryRow
          key={i}
          source0={articles[i].source}
          time0={articles[i].date}
          title0={articles[i].title}
          imgURL0={articles[i].top_image_url}
          url0={articles[i].url}
          source1={articles[i + 1].source}
          time1={articles[i + 1].date}
          title1={articles[i + 1].title}
          imgURL1={articles[i + 1].top_image_url}
          url1={articles[i + 1].url}
        >
        </NewsEntryRow>
        )
    }
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.padded}>

            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <View>
                <Text style={styles.datetext}>Sunday Oct. 8, 2017</Text>
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
                borderBottomColor: 'rgb(151, 151, 151)',
                borderBottomWidth: 1,
              }}
            />
            {newsEntryRows}
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
    paddingLeft: 30,
    paddingRight: 30,
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
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'circular-bold',
    color: 'rgb(74, 74, 74)',
  },
  logo: {
    width: 41,
    height: 37.4,
    justifyContent: 'flex-start',
  },
  spacer: {
    flex: 0.1,
  },
  source: {
    fontSize: 14,
    fontFamily: 'circular-medium',
    color: 'rgb(90,182,161)',
  },
  time: {
    fontSize: 12,
    fontFamily: 'circular-book',
  },
  title: {
    paddingTop: 10, 
    paddingBottom: 10,
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
  newsEntryRow: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  newsEntry: {
    flex: 0.6,
  }
});
