import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  Model,
  MediaPlayerState,
  PointLight,
  Plane,
  NativeModules
} from 'react-vr';

import GazeImageButton from "./Components/GazeImageButton.js";



const roomModule = NativeModules.RoomSceneModule;

export default class reactvr extends React.Component {
  constructor() {
    super();
    this.state = {
      playerState: new MediaPlayerState({autoPlay: false, muted: true}),
    }
  }
  onClickPlay(){
    if(this.state.playerState.playStatus=="playing"){
      this.state.playerState.pause()
    }else{
      this.state.playerState.play()
    }
    console.log(this.state.playerState.playStatus);
  }
  render() {


    return (
      <View>




        <View  style={{

         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'flex-start',
         transform: [{translate: [0, 0, -10]}],
         layoutOrigin: [0.5,0.5]}}>
           <Video
                   name="videp"
                   playerState={this.state.playerState}
                    style={{width: 8.52, height:4.80, transform:[{translate:[-0.25,0.4,-0.6]}]}}
                   source={asset('two.mp4')} />
            <GazeImageButton
              imageStyle={{width:0.38, height:0.38}}
              holderStyle={{transform:[{translate:[-0.25,0.36,0]}]}}
              enterColor="#e7004e"
              restColor="#4ab3ca"
              clickColor="#393739"
              gazeTime={2000}
              onClick={this.onClickPlay.bind(this)}
              on={true}
              onImage={asset("play.png")}
              offImage={asset("stop.png")}
              ></GazeImageButton>


         </View>



      </View>

    );
  }
};

AppRegistry.registerComponent('reactvr', () => reactvr);
