const udp = require('dgram');
const client = udp.createSocket('udp4');
const date = new Date();

client.send('REQREPLY_ALL\r\n', 6000, '10.10.255.255', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Sent')
})

client.on('message', (msg,) => {
    if (msg.toString().includes('Pue 71')) {
        console.log(date)
    }
})