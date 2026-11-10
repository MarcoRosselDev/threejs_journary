import * as THREE from 'three'
const canvas = document.querySelector('canvas.webgl'), sizes = {width: window.innerWidth, height: window.innerHeight}
const fov = 75, aspect = sizes.width / sizes.height, near=0.1, far=100
const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 4


// we have to load the matcap texture
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('./static/matcaps/4.png')

const material = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
const cube= new THREE.Mesh(new THREE.BoxGeometry(1,1,1), material)
scene.add(camera, cube)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

const tick = () => {

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}


tick()