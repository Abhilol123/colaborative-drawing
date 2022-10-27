const express = require("express");
const socket = require("socket.io");

const app = express();

const NODEJS_PORT = process.env.NODEJS_PORT ?? 3080;

const server = app.listen(NODEJS_PORT, () => {
    console.log(`listening at ${NODEJS_PORT}`);
});

const io = socket(server);

app.use(express.static("public"));

io.sockets.on('connection', (socket) => {
    console.log(`new connection: ${socket.id}`);

    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data);
    });
});

