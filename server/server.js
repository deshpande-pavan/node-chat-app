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

    // socket.emit('newEmail', {
    //     from: 'pavan@gmai.com',
    //     text: 'hey whats up',
    //     createdAt: new Date()
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log("Create Email:\n", newEmail);
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('New Message',newMessage);
    });

    socket.emit('newMessage',{
        from:"pavan",
        text:"Hey, man",
        createdAt:new Date()
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Started server on port ${port}.`);
});