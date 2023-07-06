var net = require('net');

var server1 = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('P1 ?        6.2 g  ;P2 ?        4.5 g  ;P3 v      0.000 kg ;P4 v      0.000 kg \n');
    })
});

server1.listen(4005, '127.0.0.1');