import React from 'react';

import {
  asset,
  View,
  VrButton,
  Text,
  Image} from 'react-vr';

class TextButton extends React.Component{
    constructor() {
      super();

    }
    handleClick () {

    }
    componentDidMount () {

  }
    render(){

      return(
        <VrButton onClick={()=>this.props.clicked(this.props.stateIndex)}>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.message}</Text>
        </View>
        </VrButton>
      )
    }
}

module.exports= TextButton;
