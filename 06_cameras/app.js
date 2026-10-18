import * as THREE from 'three'

const timer = new THREE.Timer()
const canvas = document.querySelector("canvas.webgl")
const size = {
    width: 800,
    heigth:600
}
const aspect_ratio = size.width/size.heigth

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, aspect_ratio, 0.1, 100)
camera.position.z = 3

const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"purple"})
)
scene.add(mesh)

const r = new THREE.WebGLRenderer({canvas})
r.setSize(size.width, size.heigth)
r.render(scene, camera)

// Cursor
window.addEventListener('mousemove', (event) =>
{
    console.log(event.clientX, event.clientY)
})

function tick(timestamp) {
    timer.update(timestamp); // ⚠️ imprescindible: actualiza el estado interno una vez por frame

    const delta = timer.getDelta(); // segundos desde el frame anterior
    const rotationSpeed = 0.3;
  
    mesh.rotation.y += rotationSpeed * delta;
    mesh.rotation.z += rotationSpeed * delta;
    
    r.render(scene, camera)
    //window.requestAnimationFrame(tick)
}
r.setAnimationLoop(tick);

//tick()