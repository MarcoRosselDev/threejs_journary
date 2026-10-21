import { PerspectiveCamera } from "three"
import {renderer} from "./app.js"

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const fov = 75
let aspect = size.width/size.height
const near = 0.1
const far = 100

const camera = new PerspectiveCamera(fov, aspect, near, far)

window.addEventListener("resize", e => 
    
    {
    //console.log("se esta realizando un resize");
    size.width = window.innerWidth
    size.height = window.innerHeight

    camera.aspect = size.width/size.height
    camera.updateProjectionMatrix()
    // this limita a 2 el limite de pixelRatio para no gastar la bateria en exceso y no necesitamos tanto detalle
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(size.width, size.height)
    })

export {camera, size}