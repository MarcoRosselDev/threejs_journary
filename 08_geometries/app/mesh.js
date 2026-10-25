import { BoxGeometry, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

/* const mesh = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({
        color: "purple",
        wireframe: true
    })
) */

const mesh = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({
        color:"red",
        wireframe: true
    })
)

export { mesh }