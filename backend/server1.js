var net = require('net');

var server1 = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('P1 ?      201.9 g  ;P2 ?      139.8 g  ;P3 v      0.000 kg ;P4 v      0.000 kg \n');
    })
});

server1.listen(4002, '127.0.0.1');