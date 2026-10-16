import * as THREE from "three"

const canvas = document.querySelector("canvas.webgl")
const size = {
  width: 600,
  heigth: 400
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, size.width / size.heigth, 0.8)
const geometry = new THREE.BoxGeometry(1,1,1)
const materialidad = new THREE.MeshBasicMaterial({color:"purple"})
const mesh = new THREE.Mesh(geometry, materialidad)
camera.position.z = 2
scene.add(camera, mesh)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.heigth)
renderer.render(scene, camera)