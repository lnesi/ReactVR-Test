import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  VideoControl,
  Model,
  MediaPlayerState,
  VrButton,
  Image,
} from 'react-vr';


class GazeVRButton extends React.Component{
  constructor() {
    super();
  }
  render(){
    return(
      <View>
       <Text>Hello</Text>
      </View>
    )
  }
}





export default class reactvr extends React.Component {
  constructor() {
    super();

    this.state = {
      textColor: 'white',
      buttonIsClicked: false,
      playerState: new MediaPlayerState({autoPlay: false, muted: true}),
      timer:null
    } // init with muted, autoPlay};

  }
_onViewClicked(){


}
onEnterRay(e){
  this.state.timer=setTimeout(this.clickRay.bind(this), 2000);
}
onExitRay(){
  clearTimeout(this.state.timer);
    this.state.timer= null;
}

clickRay(){
  this.onExitRay();
  if(this.state.playerState.playStatus=="playing"){
    this.state.playerState.pause()
  }else{
    this.state.playerState.play()
  }
  console.log(this.state.playerState.playStatus);
}
  render() {
     const {buttonIsClicked} = this.state

    return (
      <View>
        <Pano source={asset('meeting_room.jpg')}/>

         <GazeVRButton></GazeVRButton>
      <Video  playerState={this.state.playerState}
              style={{width: 3.54, height:2.0,transform: [{translate: [-1.65, 1.35, -5.4]}]}}
              source={asset('big_buck_bunny.mp4')} />



      </View>

    );
  }
};

AppRegistry.registerComponent('reactvr', () => reactvr);
