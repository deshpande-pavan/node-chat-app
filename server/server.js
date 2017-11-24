const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
// console.log(__dirname+'/../public');
// console.log(publicPath);

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected.');

    socket.on('createMessage', (newMessage) => {
        console.log('New Message', newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Started server on port ${port}.`);
});