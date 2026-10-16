import * as T from "three"

// we need 4 elements:

// 1. a scene that will contain objects
const scene = new T.Scene()

// 2. some objects
const box = new T.BoxGeometry(1,1,1)
const material = new T.MeshBasicMaterial({color:"purple"})
const mesh = new T.Mesh(box, material)
scene.add(mesh)

// 3. a camera

// fov se expresa en angulos, mientras mas grande, mas perspectiva pero mas distorcionado
// mas pequeño se hace zooom in
const fov_field_of_vew_o_campo_de_vision = 75 

// Sizes
const sizes = {
    width: 800,
    height: 600
}
// The aspect ratio o la relacion de aspecto
const aspect_o_relacion_de_aspecto = sizes.width / sizes.height

const camera = new T.PerspectiveCamera(fov_field_of_vew_o_campo_de_vision, aspect_o_relacion_de_aspecto, 0.8)
//const camera = new T.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );

// 4. a renderer
const canvas = document.querySelector("canvas.webgl");

// Renderer
const renderer = new T.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

camera.position.z = 2
renderer.render(scene, camera)
