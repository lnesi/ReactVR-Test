
import * as THREE from 'three'
import {Module} from 'react-vr-web';


export default class RoomSceneModule extends Module{
  constructor(scene) {
    super('RoomSceneModule');
    const roomLoader=new THREE.ObjectLoader();
    roomLoader.load(
    			// resource URL
    			'../static_assets/room.json',
    			// Function when resource is loaded
    			function ( object ,p1,p2) {

    				object.name="RoomScene";
            object.position.y=-4;
    				scene.add(object);
            this.init(object);

    			}.bind(this),
    			// Function called when download progresses
    			function ( xhr ) {
    				console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    			},
    			// Function called when download errors
    			function ( xhr ) {
    				console.log( 'An error happened' );
    			}
    		);
  }
  init(model) {
    this.model = model;
    //console.log("Cameras",this.model.children[0].children[0].shadow.camera,this.camera);
  //  this.model.children[0].children[0].shadow.camera=this.camera;

  }
  setCamera(camera){
    //this.camera=camera;
    console.log("setCamera",camera);
  }
}
