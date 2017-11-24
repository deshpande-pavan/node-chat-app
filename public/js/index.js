var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: "pavan",
        text: "Yup, that works for me"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

// socket.on('newEmail',function(email){
//     console.log('New Email',email);
// });

// socket.emit('createEmail',{
//     to:'pavan@gmail.com',
//     text:'Hey, how are you',
//     sentAt:new Date()
// });

socket.on('newMessage', function (newMessage) {
    console.log('New Message:', newMessage);
});

