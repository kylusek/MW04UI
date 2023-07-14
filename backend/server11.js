let net = require('net');

let server1 = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('P1          0.0 g  ;P2 ?      173.3 g  ;P3 v      0.000 kg ;P4 v      0.000 kg \n');
    })
});

server1.listen(4012, '127.0.0.1');