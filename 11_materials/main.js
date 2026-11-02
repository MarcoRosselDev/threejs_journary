import * as THREE from 'three'
const canvas = document.querySelector('canvas.webgl')
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

/**
 * Objects
 */
// MeshBasicMaterial
const material = new THREE.MeshBasicMaterial({color:'red'})

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)
sphere.position.x = - 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 32),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene,camera)

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

const tick = () => {
    torus.rotation.x += 0.05
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()