const path = require('path');
const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(4200);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) { 
    io.emit('chat message', msg);
  });
});
