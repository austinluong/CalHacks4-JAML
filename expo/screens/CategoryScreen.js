import React from 'react';
import { 
  ScrollView, 
  StyleSheet 
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };
  
  render() {
    return(
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );     
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   },
});
