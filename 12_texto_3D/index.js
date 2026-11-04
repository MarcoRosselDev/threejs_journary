import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight, canvas = document.querySelector('canvas.webgl');

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 ), scene = new THREE.Scene();
camera.position.z = 1;

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 ), material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// animation

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}