var net = require('net');

var server1 = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('P1 ?      201.9 g  ;P2 ?      139.8 g  ;P3 ;P4 \n');
    })
});

server1.listen(4001, '127.0.0.1');