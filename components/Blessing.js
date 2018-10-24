import React from 'react';
import {Alert,View,Button,TouchableHighlight,Text} from 'react-native';

export default class Blessing extends React.Component{
    constructor(props){
      super(props);
      this.state={text:''};
    }

    _onPressButton(){
        Alert.alert('You tapped button');
    }

    render(){
      return(
       <View style={{marginBottom:10}}>
        <Button onPress={()=>{
           Alert.alert("Good");
        }} title="Press Here"/>
         <TouchableHighlight style={{marginTop:10,backgroundColor:'red',height:30}} onPress={this._onPressButton}>
          <View>
            <Text style={{color:'white',marginTop:5,fontWeight:'bold'}}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
       </View>
      )
    }
}