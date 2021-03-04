const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      
    });
  });


io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });

http.listen(3000, () => {
  console.log('listening on *:3000');
});