const net = require('net');
const express = require('express');
const cors = require('cors');
const app = express();
let data = '';
let weights = []
let units = []
let isStab = []
let temp = {}
let connections = []

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    connections = [{
        ip: req.body.ip,
        port: req.body.port
    }]
    console.log(connections)
    const client = new net.Socket();
    client.connect(connections[0].port, connections[0].ip, () => {
        console.log(`connected`);
        setInterval(() => {
            client.write('SIA\r\n');
        }, 100);
        client.on('data', (result) => {
            data = result.toString().trim();
            weights[0] = data.slice(5, 15).replace(/\s+/g, '')
            units[0] = data.slice(15, 19).replace(/\s+/g, '')
            isStab[0] = data[3]
            weights[1] = data.slice(25, 35).replace(/\s+/g, '')
            units[1] = data.slice(35, 39).replace(/\s+/g, '')
            isStab[1] = data[23]
            weights[2] = data.slice(45, 55).replace(/\s+/g, '')
            units[2] = data.slice(55, 59).replace(/\s+/g, '')
            isStab[2] = data[43]
            weights[3] = data.slice(65, 75).replace(/\s+/g, '')
            units[3] = data.slice(75, 79).replace(/\s+/g, '')
            isStab[3] = data[63]
            temp = {
                id: 1,
                Weighnings: [
                    {id: 1, weight: weights[0], unit: units[0], isStab: isStab[0]},
                    {id: 2, weight: weights[1], unit: units[1], isStab: isStab[1]},
                    {id: 3, weight: weights[2], unit: units[2], isStab: isStab[2]},
                    {id: 4, weight: weights[3], unit: units[3], isStab: isStab[3]}
                ]
            }
        });
    });
})

app.get('/', (req, res) => {
    res.send(JSON.stringify(temp));
})

app.listen(2000, () => {
    console.log('listening on port 2000');
})