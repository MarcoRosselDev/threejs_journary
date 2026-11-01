import * as THREE from 'three'
import {camera, size} from './camera.js'
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
camera.position.z = 3

//const image = new Image()
//const texture = new THREE.Texture(image)
//texture.colorSpace = THREE.SRGBColorSpace
//image.addEventListener('load', () =>
//{
//    texture.needsUpdate = true
//})
//image.src = '/textures/door/color.jpg'
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () =>
{
    console.log('loading started')
}
loadingManager.onLoad = () =>
{
    console.log('loading finished')
}
loadingManager.onProgress = () =>
{
    console.log('loading progressing')
}
loadingManager.onError = () =>
{
    console.log('loading error')
}
    
const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
colorTexture.colorSpace = THREE.SRGBColorSpace
//colorTexture.repeat.x = 3
//colorTexture.repeat.y = 3
colorTexture.wrapS = THREE.RepeatWrapping
colorTexture.wrapT = THREE.RepeatWrapping
colorTexture.wrapS = THREE.MirroredRepeatWrapping
colorTexture.wrapT = THREE.MirroredRepeatWrapping
colorTexture.offset.x = 0.5
// es el angulo en radianes
colorTexture.rotation = Math.PI * 0.25
colorTexture.center.x = 0.5
colorTexture.center.y = 0.5
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
//const texture = textureLoader.load('/textures/door/color.jpg', 
//    // load
//    () => {
//        console.log('se esta cargando or leading')
//    },
//    // progres
//    () => {
//        console.log('there is progresing madafaker')
//    },
//    // error
//    () => {
//        console.log('salto un error madafaca, mira a ver que pahoooo!')
//    },
//)
//texture.colorSpace = THREE.SRGBColorSpace

// mesh
const geometry = new THREE.BoxGeometry(1,1,1)
//const geometry = new THREE.TorusGeometry(1, 0.35, 32, 100)
//console.log(geometry.attributes.uv)
//const material = new THREE.MeshBasicMaterial({color:'red'})
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)


scene.add(camera, mesh)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)

const tick = () =>
{
    mesh.rotation.x += 0.005
    mesh.rotation.y += 0.005
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

export {canvas, renderer}