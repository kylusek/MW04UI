const udp = require('dgram');
const client = udp.createSocket('udp4');

const express = require('express');
const app = express();
const cors = require('cors');

let addresses = {list: []}

app.use(cors());
app.use(express.json());

client.on('message', (msg) => {
    let str = msg.toString();
    //if(str.includes('5Y')) {
        addresses.list.push({
            ip: str.slice(24, str.search('><PORT_TCP')),
            port: str.slice(str.search('TCP')+4, str.search('><DEVICE_TYPE')),
            name: str.slice(str.search('NAME=')+5, str.search('><SERIAL_NUMBER')),
            serial: str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION'))
        })
        app.get('/data', (req, res) => {
            res.set('Content-Type', 'application/json')
            res.send(JSON.stringify(addresses))
        })
    //}
});

app.post('/', (req, res) => {
    res.set('Content-Type', 'application/json')

    addresses.list = []
    client.send('REQREPLY_ALL\r\n', 6000, '10.10.255.255', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('message sent');
        }
    })

})

app.listen(2001, () => {
    console.log('App is listening on port 2001');
    client.send('REQREPLY_ALL\r\n', 6000, '10.10.255.255', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('message sent');
        }
    })
})