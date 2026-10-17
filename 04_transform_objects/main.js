import * as THREE from "three"

const canvas = document.querySelector("canvas.webgl")
const size = {
  width: 600,
  heigth: 400
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width / size.heigth, 0.8)
const geometry = new THREE.BoxGeometry(1,1,1)
const materialidad = new THREE.MeshBasicMaterial({color:"purple"})
const mesh = new THREE.Mesh(geometry, materialidad)
// mesh.rotateY(45)
// mesh.rotateZ(45)
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1
// hace lo mismo que las 3 lineas de codigo arriba
mesh.position.set(0.7, - 0.6, 1)

camera.position.z = 4
camera.position.y = 0.5
camera.position.x = 1
// entonces position.length() es la distancia dedsde el origen del espacio contenedor con el objeto, no su longitud en si
console.log(mesh.position.length());
// esto me da 3.138470965295043 porque movimos el mesh mas arriba
console.log(mesh.position.distanceTo(camera.position));

// cambiar la rotacion hacia la camara pero manteniendo la distancia con la camara
//console.log(mesh.position.normalize())


// test de scaling
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
// this is not working
//object.rotation.reorder('YXZ')

// mirar hacia un objeto
camera.lookAt(mesh.position)
//camera.lookAt(new THREE.Vector3(0, - 1, 0))
// tambien se puede el mesh o cualquier objeto
//mesh.lookAt(camera.position)

scene.add(camera, mesh)
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.heigth)
renderer.render(scene, camera)