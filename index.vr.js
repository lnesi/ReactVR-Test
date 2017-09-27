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
  Plane
} from 'react-vr';

import GazeImageButton from "./Components/GazeImageButton.js";





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


        <Pano source={asset( 'meeting_room.jpg')} decay={2} distance={0}  intensity={10}/>

        <View  style={{

         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'flex-start',
         transform: [{translate: [0, 0, -5]}],
         layoutOrigin: [0.5,0.5]}}>
           <Video  playerState={this.state.playerState}
                   style={{width: 3.54, height:2.0, transform:[{translate:[0.11,0.25,-0.4]}]}}
                   source={asset('two.mp4')} />
            <GazeImageButton
              imageStyle={{width:0.25, height:0.25}}
              holderStyle={{transform:[{translate:[-1.35,0.6,0]}]}}
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
         <Model
          style={{transform:[{translate:[-2,-2,5]},{scale:0.02},{rotateY:180}]}}
          
           source={{
             obj: asset('luigi textured obj.obj'),
             mtl: asset('luigi textured obj.mtl'),
           }}
         />

      </View>

    );
  }
};

AppRegistry.registerComponent('reactvr', () => reactvr);
