import { WebGLRenderer } from "three";
import { sizes } from "./sizes";
import { scene } from "./scene";
import { camera } from "./camera";

const canvas = document.querySelector("canvas.webgl")

const renderer = new WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)

const tick = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

export {
    renderer,
    canvas
}