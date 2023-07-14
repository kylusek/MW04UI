const net = require('net');

let server1 = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('P1 ?      215.8 g  ;P2          1.7 g  ;P3 v      0.000 kg ;P4 v      0.000 kg \n');
    })
});

server1.listen(4011, '127.0.0.1');