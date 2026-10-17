import * as THREE from "three"
// ahora puedo usar gsap para mover el mesh de abajo hacia la izquierda de manera suave
import gsap from "gsap"

let last = Date.now();
const canvas = document.querySelector("canvas.webgl")
const size = {
    width: 600,
    heigth: 400
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width/size.heigth)
camera.position.z = 3
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"purple"})
)
scene.add(camera, mesh)

// Anima la posición 'x' del mesh
gsap.to(mesh.position, {
  x: -2,             // Posición final (izquierda)
  duration: 2,       // Duración del trayecto (en segundos)
  repeat: 3,        // -1 significa repetición infinita
  yoyo: true,        // Hace que la animación vaya y vuelva (efecto péndulo)
  ease: "power1.inOut" // Curva de aceleración/desaceleración suave
});

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.heigth)
renderer.render(scene, camera)

const tick = () =>
{
    const now = Date.now();
    //const delta = (now - last) / 1000; // ms → segundos
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;

    const speed = 0.3; // radianes por segundo
    mesh.rotation.y += speed * delta;
    mesh.rotation.z += speed * delta;
    // mesh.rotation.y += 0.005
    // mesh.rotation.z += 0.005
    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()