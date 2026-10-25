import { Scene } from "three"
import { camera } from "./camera.js"
import { mesh } from "./mesh.js"

const scene = new Scene()
scene.add(camera, mesh)
camera.position.z = 3

export {scene}