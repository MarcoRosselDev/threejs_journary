import {BoxGeometry, Mesh, MeshBasicMaterial} from 'three'
const mesh = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshBasicMaterial({color:"purple"})
)

export {mesh}