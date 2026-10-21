import * as THREE from "three"

const canvas = document.querySelector("canvas.webgl")
const size = {
    width: 800,
    height:600
}
const fov=75 // I puted 0.8 and that was a mistake, the box was to closed to the screen
const aspect=size.width/size.height
const near=0.1
const far=100
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2
const mesh=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"purple"})
)
scene.add(camera, mesh)
//-------------------------------------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)

let cursor = {
    x:0,
    y:0
}

canvas.addEventListener("mousemove", (event) =>{
    cursor.x = event.clientX/size.width -0.5
    cursor.y = -(event.clientY/size.height-0.5)
    //console.log(cursor.x, "x");
    //console.log(cursor.y, "y");
})

const tick =()=>{
    mesh.rotation.x = -cursor.y
    mesh.rotation.y = cursor.x

    renderer.render(scene, camera)
    
    window.requestAnimationFrame(tick)
}

tick()