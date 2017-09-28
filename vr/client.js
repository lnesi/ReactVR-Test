// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import * as THREE from 'three'
window.THREE=THREE;
import ColladaLoader from '../Utils/ColladaLoader.js';
import RoomSceneModule from '../Modules/RoomSceneModule.js';

const scene = new THREE.Scene();

var loader = new ColladaLoader();

loader.load(
	// resource URL
	'../static_assets/HDTV.dae',
	// Function when resource is loaded
	function ( collada ) {
    collada.scene.name="HDTV";
    collada.scene.scale.setScalar(0.3);
    collada.scene.position.x=-5;
    collada.scene.position.y=-2.5;
    collada.scene.position.z=-12;
  //  collada.scene.children[0]
		scene.add(collada.scene );
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	}
);

const roomSceneModule = new RoomSceneModule(scene);




window.scene=scene;


function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'reactvr', parent, {
    // Add custom options here
    raycasters: [
      {
        getType: () => "simple",
        getRayOrigin: () => [0, 0, 0],
        getRayDirection: () => [0, 0, -1],
        drawsCursor: () => true
      } // Add SimpleRaycaster to the options
    ],
    antialias:true,
    nativeModules: [ roomSceneModule ],
    cursorVisibility: 'visible',
    scene:scene,
    ...options,

  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();

  //vr.player.renderer.shadowMap.enabled=true;

  return vr;
}
window.ReactVR = {init};
