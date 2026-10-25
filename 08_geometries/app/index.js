import { WebGLRenderer } from "three";
import { sizes } from "./sizes";
import { scene } from "./scene";
import { camera } from "./camera";
import { mesh } from "./mesh";

const canvas = document.querySelector("canvas.webgl")
let cursor = {
    x:0,
    y:0
}
canvas.addEventListener("mousemove", e => {
    cursor.x = (e.clientY/sizes.height - 0.5)
    cursor.y = (e.clientX/sizes.width - 0.5)
})


const renderer = new WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)

const tick = () => {
    mesh.rotation.x = cursor.x
    mesh.rotation.y = cursor.y
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}


tick()

export {
    renderer,
    canvas
}