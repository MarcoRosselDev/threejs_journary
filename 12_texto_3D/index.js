//import fonttt from './static/fonts/helvetiker_regular.typeface.json'
import * as THREE from 'three';
const width = window.innerWidth, height = window.innerHeight, canvas = document.querySelector('canvas.webgl');
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
const fontLoader = new FontLoader()

fontLoader.load('./static/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry(
        'M R',
        {
            font: font,
            size: 0.5,
            depth: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
    )
    const textMaterial = new THREE.MeshNormalMaterial()
    const text = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(text)

    renderer.setAnimationLoop( animate_text );
    function animate_text(time) {

        mesh.rotation.x = time / 2000
        mesh.rotation.y = time / 1000
    
	
        text.rotation.x = time / 2000
        text.rotation.y = time / 2000

        renderer.render(scene, camera)
    }
    animate_text()
})

 //fontLoader.load(
   // '/fonts/helvetiker_regular.typeface.json',
   // (font) =>
   // {
   //     console.log('loaded', font)
   // }
//)
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 ), scene = new THREE.Scene();
camera.position.z = 3

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 ), material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true, canvas: canvas } );
renderer.setSize( width, height );
// renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// animation

/* function animate( time ) {
	// mesh.rotation.x = time / 2000, mesh.rotation.y = time / 1000, renderer.render( scene, camera );
	mesh.rotation.x = time / 2000
	mesh.rotation.y = time / 1000

	renderer.render( scene, camera );
} */