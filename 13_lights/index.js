import * as THREE from 'three'
import GUI from 'lil-gui'
const gui = new GUI()
/* const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('./static/matcap/8.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace */

const canvas = document.querySelector('canvas.webgl'),          size = { heigth: window.innerHeight, width: window.innerWidth};
const fov = 75,         near = 0.1,         far = 100,          aspect = size.width / size.heigth;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far),        scene = new THREE.Scene()
camera.position.z = 7
camera.position.y = 1

const directional_light = new THREE.DirectionalLight(0xffffff, 15)
directional_light.castShadow = true // que emita sombras
directional_light.position.y = 4
directional_light.position.x = 2

//scene.add(directional_light)
//const material = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
const ambient_light = new THREE.AmbientLight(0xffffff, 3)

const material = new THREE.MeshStandardMaterial({color: 'indigo'})

const cubo_geometry = new THREE.BoxGeometry(1,1,1)
const cubo = new THREE.Mesh(cubo_geometry, material)
cubo.position.y = 0.5

const esfera = new THREE.Mesh(new THREE.SphereGeometry(1,16, 16), material)
esfera.position.x = 3
esfera.position.y = 0.01
esfera.castShadow = true// activamos emicion de sombras

const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.3, 64, 128), material)
torus.position.x = -3
torus.position.y = 0.5

const plane = new THREE.Mesh(new THREE.PlaneGeometry(11, 6), material) 
plane.position.y = -1
plane.rotation.x = -1.56
plane.receiveShadow = true // activamos el resivir sombras

scene.add(camera, cubo, esfera, plane, directional_light, ambient_light, torus)
gui.add(directional_light, 'intensity', 1,200, 1)
gui.add(directional_light.position, 'x', -5, 5, 0.2)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.shadowMap.enabled = true
renderer.setSize(size.width, size.heigth)

renderer.render(scene, camera)
// activar las combras en el renderizador

const tick = () => {
    cubo.rotation.x += 0.01
    cubo.rotation.y += 0.01
    cubo.rotation.z += 0.01
    esfera.rotation.x += 0.01
    esfera.rotation.y += 0.01
    esfera.rotation.z += 0.01
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01
    torus.rotation.z += 0.01
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()