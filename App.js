import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles/styles';
import Greeting from './components/Greeting';
import Blessing from './components/Blessing';

export default class App extends React.Component {
  render() {
    let pic={
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <Blessing/>
        <Text style={{marginBottom:10}}>Hello World</Text>
        <Image source={pic} style={{width:193,height:100,marginBottom:10}}/>
        <Greeting name={"Biplab"}/>
      </View>
    );
  }
}


