import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const cube = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({color: "purple"})
)

export { cube }