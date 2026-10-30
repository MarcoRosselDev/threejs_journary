import * as THREE from "three"
import gsap from "gsap"
// lil-gui
import GUI from 'lil-gui';
const gui = new GUI({ 
    width: 600,
    title: 'Nice debug UI',
    closeFolders: true
})
const folder_one = gui.addFolder('folder one')
const folder_two = gui.addFolder('folder two')
const debugObj = {}

// gui.add(myObject, "myBoolean")
// gui.add( myObject, 'myFunction' ); // Button
// gui.add( myObject, 'myString' );   // Text Field
// gui.add( myObject, 'myNumber' );   // Number Field
// flujo normal de un proyecto three.js
const canvas = document.querySelector("canvas.webgl")
const size = {
    height: window.innerHeight,
    width: window.innerWidth
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 100)

const geometry = new THREE.BoxGeometry(1,1,1)
debugObj.color = "#9f5656"
const material = new THREE.MeshBasicMaterial({color:debugObj.color})
const mesh = new THREE.Mesh(
    geometry,
    material
)
camera.position.z = 4
scene.add(camera, mesh)

// gui
//gui.add(mesh.position, 'y', - 3, 3, 0.01)
// esto hace lo mismo pero es mas claro que en una sola linea donde no sabemos que hace cada argumento que damos a simple vista
// tendriamos que releer la documentacion para recordarlo denuevo o tendriamos que dejar comentarios de que hace cada parametro
folder_one
    .add(mesh.position, 'y')
    .min(- 3)
    .max(3)
    .step(0.01)
    .name("mi nombre de prueba")

folder_one
    .add(material, 'wireframe')

/* gui
    .addColor(material, 'color')    
    .onFinishChange(value => {
        //console.log(value.getHexString());
        debugObj.color = value.getHexString()
    }) */

folder_two
    .addColor(debugObj, 'color')
    .onChange(() => material.color.set(debugObj.color))


/* let cursor = {
    x:0,
    y:0
} */
/* canvas.addEventListener("mousemove", e => {
    cursor.x = (e.clientY/size.height - 0.5)
    cursor.y = (e.clientX/size.width - 0.5)
}) */

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




debugObj.fn = () => {
    console.log("cliked");
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
    gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
}

folder_two
    .add(debugObj, 'fn')


gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })


const tick = () => {
    /* mesh.rotation.x = cursor.x
    mesh.rotation.y = cursor.y */
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}


tick()