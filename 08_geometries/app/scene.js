import { Scene } from "three"
import { camera } from "./camera.js"
import { cube } from "./cube.js"

const scene = new Scene()
scene.add(camera, cube)
camera.position.z = 3

export {scene}