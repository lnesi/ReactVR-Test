import React from 'react';

import {
  asset,
  View,
  VrButton,
  Image
} from 'react-vr';

class GazeImageButton extends React.Component{
  constructor(){
    super();
    this.state = {
      on:false,
      currentImage:{uri:''},
      currentColor:"black",
      timer:null,
      imageStyle:{opacity:0.5}
    };

  }
  componentDidMount(){
    this.state.on=this.props.on;
    this.resetButton();
  }
  setImage(){
    if(this.state.on){
      this.setState({currentImage:this.props.onImage});
    }else{
      this.setState({currentImage:this.props.offImage});
    }
  }
  onEnterHandler(){
    this.setState({currentColor:this.props.enterColor,imageStyle:{opacity:1}});
    this.state.timer=setTimeout(this.onClickHandler.bind(this), this.props.gazeTime);
  }

  onExitHanldler(){
    clearTimeout(this.state.timer);
    this.state.timer= null;
    this.resetButton();
  }
  resetButton(){
    this.setState({currentColor:this.props.restColor,imageStyle:{opacity:0.5}});
    this.setImage();
  }
  onClickHandler(){
    this.setState({on:!this.state.on});
    this.onExitHanldler();
    this.setState({currentColor:this.props.clickColor});
    setTimeout(this.resetButton.bind(this), 100);
    this.props.onClick();
  }

  render(){
    return (
      <VrButton style={[this.props.holderStyle]} onEnter={this.onEnterHandler.bind(this)} onExit={this.onExitHanldler.bind(this)} onClick={this.onClickHandler.bind(this)}>
        <Image
          style={[this.props.imageStyle,{tintColor:this.state.currentColor},this.state.imageStyle]}
          source={this.state.currentImage}
       />
       </VrButton>
    )
  }
}

export default GazeImageButton;
