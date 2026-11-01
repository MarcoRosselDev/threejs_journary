const textureLoader = new THREE.TextureLoader()
// load => progres => error ()
const texture = textureLoader.load('/textures/door/color.jpg', 
// load
() => {
    console.log('se esta cargando or leading')
},
// progres
() => {
    console.log('there is progresing madafaker')
},
// error
() => {
    console.log('salto un error madafaca, mira a ver que pahoooo!')
},
)
texture.colorSpace = THREE.SRGBColorSpace

// versus

const image = new Image()
const texture = new THREE.Texture(image)
texture.colorSpace = THREE.SRGBColorSpace
image.addEventListener('load', () =>
{
    texture.needsUpdate = true
})
image.src = '/textures/door/color.jpg'