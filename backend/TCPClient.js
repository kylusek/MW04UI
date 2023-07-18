//Requirements
const net = require('net');
const express = require('express');
const cors = require('cors');

//Functions
const app = express();

//Arrays
let weights = []
let units = []
let isStab = []
let idTab = []

//Objects
let temp = {}
let object = {
    Scales: []
}

//Strings
let data = '';

let connectionCount = 0;
let delCount = 0;

//Nulls
let closeIp = null;
let closePort = null;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    const client = new net.Socket();
    const ip = req.body.ip;
    const port = req.body.port;
    client.connect(port, ip, () => {
        console.log(`connected to ${req.body.ip}:${req.body.port}`);
        connectionCount++;
        const index = connectionCount-1
        idTab[index] = connectionCount - delCount
        let id = null;
        setInterval(() => {
            id = idTab[index]
            // if(closeIp === ip && closePort === port) {
            //     object.Scales.pop();
            //
            // }
            client.write('SIA\r\n');
        }, 100);
        client.on('data', (result) => {
            if(closeIp === ip && closePort === port){
                object.Scales.pop();
                client.destroy();
                closeIp = null;
                closePort = null;
                delCount++;
                for(let i = index; i < connectionCount; i++){
                    idTab[i] -= 1
                }
                console.log(`disconnected from ${req.body.ip}:${req.body.port}`)
            }
            else {
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
                    id: id,
                    ip: req.body.ip,
                    port: req.body.port,
                    Weighnings: [
                        {id: 1, weight: weights[0], unit: units[0], isStab: isStab[0]},
                        {id: 2, weight: weights[1], unit: units[1], isStab: isStab[1]},
                        {id: 3, weight: weights[2], unit: units[2], isStab: isStab[2]},
                        {id: 4, weight: weights[3], unit: units[3], isStab: isStab[3]}
                    ]
                }
                object.Scales[id-1] = temp;
            }
        });
    });
    client.on('error', (err) => {
        console.log(err);
    })
    res.end();
})

app.post('/update', (req, res) => {
    closeIp = req.body.ip;
    closePort = req.body.port;
    res.end();
})

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(object));
})

app.listen(2000, () => {
    console.log('listening on port 2000');
})