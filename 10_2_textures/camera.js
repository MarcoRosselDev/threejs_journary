import * as THREE from 'three'
import {canvas, renderer} from './index.js'

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const fov = 75
const aspect = size.width/size.height
const near = 0.1 
const far = 100

const camera = new THREE.PerspectiveCamera(fov,aspect,near,far)

window.addEventListener('resize', () =>
{
    // Update sizes
    size.width = window.innerWidth
    size.height = window.innerHeight

    // Update camera
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(size.width, size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
    
window.addEventListener('dblclick', () =>
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})


export {camera, size}