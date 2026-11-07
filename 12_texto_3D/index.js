//import fonttt from './static/fonts/helvetiker_regular.typeface.json'
import * as THREE from 'three';
const width = window.innerWidth, height = window.innerHeight, canvas = document.querySelector('canvas.webgl');
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

const textureLoader = new THREE.TextureLoader()
const fontLoader = new FontLoader()
const matcapTexture = textureLoader.load('./static/textures/gold.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace

fontLoader.load('./static/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry(
        `Marco Rossel  
probando los
saltos de linea  
si probamos
con mas lns
quiero ver
que es lo 
que pasara
        `,
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

    // centrado de el texto

    // le pedimos que compute los saltos para saber el centro
    /* textGeometry.computeBoundingBox()
    console.log(textGeometry.boundingBox)
    // trasladamos la geometria de texto hacia la izquierda con el valore negativo de los saltos
    textGeometry.translate(
        - textGeometry.boundingBox.max.x * 0.5,
        - textGeometry.boundingBox.max.y * 0.5,
        - textGeometry.boundingBox.max.z * 0.5
    ) */

    // todo el codigo anterior se puede evitar solo escribiendo este metodo .center()
    textGeometry.center()


    //const textMaterial = new THREE.MeshNormalMaterial()
    //textMaterial.wireframe = true
    const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
    const text = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(text)

    renderer.setAnimationLoop( animate_text );
    function animate_text(time) {

    //     mesh.rotation.x = time / 2000
    //     mesh.rotation.y = time / 1000
    // 
	// 
    //     text.rotation.x = time / 2000
    //     text.rotation.y = time / 2000

        renderer.render(scene, camera)
    }
    // animate_text()
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

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 ), material = new THREE.MeshNormalMaterial({
    wireframe: true
});
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

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
