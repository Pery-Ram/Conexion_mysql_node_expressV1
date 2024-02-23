const express = require('express'); // importar el paquete Express
const mysql = require('mysql'); // importar el paquete MySQL

const app = express(); // Se crea objeto (instancia) para poder utilizar sus funciones
const port = 3500; // Puerto del webserver

// rutas
// Metodo get: Método HTTP que se utiliza para requerir (leer) recursos del servidor
app.get('/saludo', (req, res) => {
  // Respondo con el método "send" (envia texto plano) al cliente que hace un peticion por GET a la ruta "/saludo"
  res.send("Hola mundo!");
});

// ruta que devuelve un mensaje de ok y ko de la conexion a MySQL
app.get('/conexionMIDB', (req, res) => {
    try {
      const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'midb_peter'
      });
      connection.connect((err) => {
        if (err) {
          res.send('Error en la conexion MySQL');
        } else {
          res.send('Conexión correcta!');
        }
      });
    } catch (error) {
      res.send("Error en la conexión con el server MySQL");
    }
  });
  



// levanta servidor (empieza a escuchar peticiones)
app.listen(port, () => {
  console.log("Servidor corriendo por el puerto: " + port);
});
