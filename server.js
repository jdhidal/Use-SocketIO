const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Crear una aplicación Express
const app = express();

// Servidor HTTP
const server = http.createServer(app);

// Configurar Socket.IO
const io = new Server(server);

// Rutas del servidor
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Escuchar eventos de conexión
io.on("connection", (socket) => {
  console.log("Usuario conectado");

  // Escuchar un mensaje del cliente
  socket.on("chat message", (msg) => {
    console.log("Mensaje recibido: " + msg);
    io.emit("chat message", msg); // Enviar mensaje a todos los clientes
  });

  // Manejar la desconexión del usuario
  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

// Iniciar el servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
