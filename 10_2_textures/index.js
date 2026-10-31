import * as THREE from 'three'
import {camera, size} from './camera.js'
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
camera.position.z = 3

const image = new Image()
const texture = new THREE.Texture(image)
texture.colorSpace = THREE.SRGBColorSpace
image.addEventListener('load', () =>
{
    texture.needsUpdate = true
})
image.src = '/textures/door/color.jpg'

// mesh
const geometry = new THREE.BoxGeometry(1,1,1)
//const material = new THREE.MeshBasicMaterial({color:'red'})
const material = new THREE.MeshBasicMaterial({ color:'orange' })
const mesh = new THREE.Mesh(geometry, material)


scene.add(camera, mesh)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)

const tick = () =>
{
    mesh.rotation.x += 0.005
    mesh.rotation.y += 0.005
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

export {canvas, renderer}