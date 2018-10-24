import React from 'react';
import {Text,View,TextInput} from 'react-native';

export default class Greeting extends React.Component{
    constructor(props){
      super(props);
      this.state={isShowingText:true};

      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText };
        });
      }, 1000);

    }

    render(){
      let display=this.state.isShowingText?`Hello ${this.props.name}`:' '
      return(
       <View style={{marginTop:10}}>
         <Text>{display}</Text>
       </View>
      )
    }
}