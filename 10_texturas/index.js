import * as THREE from 'three'
const canvas = document.querySelector('canvas.webgl')
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}
const fov=75
const aspect = size.width/size.height
const near=0.1
const far=100

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 4
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'})
)


scene.add(camera, mesh)
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)

const tick = () => {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()


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