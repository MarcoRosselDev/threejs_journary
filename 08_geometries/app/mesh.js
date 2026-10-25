import { BoxGeometry, BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

/* const mesh = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({
        color: "purple",
        wireframe: true
    })
) */
// second mesh from lesson 2
/* const mesh = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({
        color:"red",
        wireframe: true
    })
) */

// code form three official documentation
const geometry = new BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2
	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );
// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );

const material = new MeshBasicMaterial( { 
    color: 0xff0000,
    wireframe: true
} );
// comentamos este mesh para probar el triangulo
//const mesh = new Mesh( geometry, material );

const geometria_triangulo =  new BufferGeometry();
const vertices_triangulo = new Float32Array([
    0,0,-1,
    0,1,0,
    0,0,1,
    0,-1,0,
    0,1,-1,
])

geometria_triangulo.setAttribute('position', new BufferAttribute(vertices_triangulo, 3))
const mesh = new Mesh(geometria_triangulo, material)

export { mesh }