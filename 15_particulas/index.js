import * as THREE from 'three'
import GUI from 'lil-gui'
const gui = new GUI()
const canvas = document.querySelector('canvas.webgl'),      sizes = {width: window.innerWidth, height: window.innerHeight}
const fov = 75,     near=0.1,       far=100,        aspect = sizes.width / sizes.height
const scene = new THREE.Scene(),    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 4

// we have to load the matcap texture
// const textureLoader = new THREE.TextureLoader()
// let n = 8
// const matcapTexture = textureLoader.load(`./static/matcaps/${n}.png`)
// matcapTexture.colorSpace = THREE.SRGBColorSpace
// Material
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    sizeAttenuation: true
})
// const material = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
const cube= new THREE.Points(new THREE.BoxGeometry(1,1,1), particlesMaterial)

const esfera = new THREE.Points(new THREE.SphereGeometry(0.8,36,36), particlesMaterial)
esfera.position.x = 2

scene.add(camera, cube, esfera)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

const tick = () => {
    cube.rotation.x += 0.02
    cube.rotation.y += 0.02
    cube.rotation.z += 0.02

    esfera.rotation.x += 0.02
    esfera.rotation.y += 0.02
    esfera.rotation.z += 0.02

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}


tick()