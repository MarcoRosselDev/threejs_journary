import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// resize
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
//------------------------------------------------------------------------------------------
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./textures/matcaps/1.png')
const gradientTexture = textureLoader.load('./textures/gradients/5.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace
/**
 * Objects
 */

// MeshBasicMaterial
//const material = new THREE.MeshBasicMaterial()
//const material = new THREE.MeshBasicMaterial({ map: doorColorTexture })
/* const material = new THREE.MeshBasicMaterial()
//material.map = doorColorTexture
material.color = new THREE.Color('indigo')
//material.wireframe = true
material.transparent = true
//material.opacity = 0.5
material.alphaMap = doorColorTexture
material.side = THREE.DoubleSide // por defecto es THREE.FrontSide, podemos cambiarlo a THREE.BackSide o a THREE.DoubleSide para que muestre los dos lados de la cara, mas costoso pero util para cuando tenemos un plano de 2 triangulos como el Mesh llamado plane de mas abajo, porque vemos todo negro si miramos detras
*/

// MeshNormalMaterial
//const material = new THREE.MeshNormalMaterial()
//material.flatShading = true

// MeshMatcapMaterial
//const material = new THREE.MeshMatcapMaterial()

// MeshLambertMaterial
//const material = new THREE.MeshLambertMaterial({color:'pink'})

// MeshPhongMaterial
//const material = new THREE.MeshPhongMaterial({color:'lightblue'})
//material.shininess = 100
//material.specular = new THREE.Color('white') // este es el color del reflejo de luz en la superficie

const material = new THREE.MeshToonMaterial({color:'pink'})
//material.gradientMap = gradientTexture
gradientTexture.minFilter = THREE.NearestFilter // para que no se difuce por ser pixeles demasiado chiquitos
gradientTexture.magFilter = THREE.NearestFilter
material.gradientMap = gradientTexture
gradientTexture.generateMipmaps = false //  para salvar memoria que no se esta utilizando bien

material.matcap = matcapTexture
material.side = THREE.DoubleSide

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

// ------------------------------------------------------------- ambient ligth
/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)
// ------------------------------------------------------------- pointing light
const pointLight = new THREE.PointLight(0xffffff, 30)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)
//------------------------------------------------------------------------------------------

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const tick = () =>
{
    // Update objects
    sphere.rotation.y += 0.01 
    plane.rotation.y += 0.01
    torus.rotation.y += 0.01

    sphere.rotation.x += 0.015
    plane.rotation.x += 0.015
    torus.rotation.x += 0.015

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()