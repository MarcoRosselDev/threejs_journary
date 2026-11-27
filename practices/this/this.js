// this en javascirpt

/* this buildea o convierte al objeto que lo contiene en el dueño
de el contexto para poder acceder a sus metodos o propiedades
esto lo hace versatil a la hora de acceder a propiedades propias de un objeto x
este puede ser un elemento del DOM o un objeto global como windows al principio del documento.

si creamos un objeto y a este le agregamos una funcion, entonces esta funcion contiene
un this que apunta ahora a este objeto y ya no a window.

tambien se puede especificar a que this se quiere apuntar
*/
console.log(this); // esto muestra el objeto windows
