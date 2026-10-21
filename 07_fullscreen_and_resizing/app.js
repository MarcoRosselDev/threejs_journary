import {Scene, WebGLRenderer} from 'three'
import {camera, size} from './camera.js'
import {mesh} from './mesh.js'
import {cursor} from './cursor.js'

const canvas = document.querySelector("canvas.webgl")
const scene = new Scene()
camera.position.z = 3
scene.add(camera, mesh)

const renderer = new WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)

renderer.render(scene, camera)

canvas.addEventListener("mousemove", e => {
    cursor.x = (e.clientY/size.width - 0.5)
    cursor.y = (e.clientX/size.height - 0.5)
})

const tick = () => {
    mesh.rotation.x = cursor.x
    mesh.rotation.y = cursor.y
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()