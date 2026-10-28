import * as THREE from "three"
const canvas = document.querySelector("canvas.webgl")
const size = {
    height: window.innerHeight,
    width: window.innerWidth
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 100)

const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'purple', wireframe: true})
)
camera.position.z = 4
scene.add(camera, mesh)

let cursor = {
    x:0,
    y:0
}
canvas.addEventListener("mousemove", e => {
    cursor.x = (e.clientY/size.height - 0.5)
    cursor.y = (e.clientX/size.width - 0.5)
})

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

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene,camera)

const tick = () => {
    mesh.rotation.x = cursor.x
    mesh.rotation.y = cursor.y
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}


tick()