import gsap from 'gsap'
import * as THREE from 'three'
import GUI from 'lil-gui'
const gui = new GUI()
const global = {}
const canvas = document.querySelector('canvas.webgl')
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const fov=75
const aspect = sizes.width/sizes.height
const near=0.1
const far=100
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 4
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
global.color = '#f11112'
const material = new THREE.MeshBasicMaterial({color: global.color})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.y=0.4
mesh.rotation.x=0.4
scene.add(camera, mesh)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

global.spin = () => {
    console.log('click');
    console.log(gsap, mesh);
    
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
}

const f = () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
}
//f()
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

gui.add(global, 'spin')

const tick = () =>
    {
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

tick()