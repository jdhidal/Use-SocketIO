const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Create an Express application
const app = express();

// HTTP server
const server = http.createServer(app);

// Configure Socket.IO
const io = new Server(server);

// Server routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Listen for connection events
io.on("connection", (socket) => {
  console.log("User connected");

  // Listen for a message from the client
  socket.on("chat message", (msg) => {
    console.log("Message received: " + msg);
    io.emit("chat message", msg); // Send message to all clients
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
