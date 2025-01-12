# Real-time Chat with Socket.IO

This is a simple real-time chat application using [Express](https://expressjs.com/), [Socket.IO](https://socket.io/), and [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

## Description

This project enables real-time communication between multiple users via an Express server with Socket.IO. Users can send messages to a chat, and all connected clients will instantly receive the message.

### Why use Socket.IO?

Socket.IO is used in this project to enable real-time, bidirectional communication between the server and the clients. Unlike traditional HTTP requests where the client has to request information from the server, Socket.IO allows the server to push messages to the client as soon as they are available. This makes it perfect for chat applications and other real-time communication systems.

## Technologies Used

- **Node.js**: JavaScript runtime environment for server-side scripting.
- **Express**: A web application framework for Node.js.
- **Socket.IO**: A library for real-time, bidirectional communication between web clients and servers.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/jdhidal/Use-SocketIO.git
   ```

2. Install the project dependencies:

   ```bash
   npm install
   npm install express socket.io
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```
   Open your browser and visit: http://localhost:3000

2. Send a message to the chat:
- Type a message in the input field.
- Click the "ENTER" button.
- The message will be sent to the server and broadcasted to all connected clients.
- All connected clients will instantly receive the message and display it in their chat windows.
