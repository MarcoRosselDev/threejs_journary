import { PerspectiveCamera } from "three"

const size = {
    width: 800,
    height: 600
}

const fov = 75
const aspect = size.width/size.height
const near = 0.1
const far = 100

const camera = new PerspectiveCamera(fov, aspect, near, far)

export {camera, size}