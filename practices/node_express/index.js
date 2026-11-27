const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("cambiamos el contenido amigos");
    
  res.send('¡Hola Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log("hola mundo desde express");
    
});
