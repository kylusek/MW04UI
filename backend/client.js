const net = require('net')
let adresses = require('./ips.json')
const express = require('express')
const cors = require('cors')
let data = ''
let object = {Scales: []}
let weights = []
let units = []
let i = 0;

adresses.ips.forEach(ip => {
    const client = new net.Socket()
    client.connect(ip.port, ip.ip, () => {
        console.log('connected')
        setInterval(() => {
            client.write('SIA\r\n')
        }, 200)
        client.on('data', (result) => {
            data = result.toString().trim()
            weights[0] = data.slice(5, 15).replace(/\s+/g, '')
            units[0] = data.slice(15, 19).replace(/\s+/g, '')
            weights[1] = data.slice(25, 35).replace(/\s+/g, '')
            units[1] = data.slice(35, 39).replace(/\s+/g, '')
            weights[2] = data.slice(45, 55).replace(/\s+/g, '')
            units[2] = data.slice(55, 59).replace(/\s+/g, '')
            weights[3] = data.slice(65, 75).replace(/\s+/g, '')
            units[3] = data.slice(75, 79).replace(/\s+/g, '')
            let temp1 = {
                id: i,
                Weighnings: [
                    {id: 1, weight: weights[0], unit: units[0]},
                    {id: 2, weight: weights[1], unit: units[1]},
                    {id: 3, weight: weights[2], unit: units[2]},
                    {id: 4, weight: weights[3], unit: units[3]}
                ]
            }
            object.Scales[i] = temp1
            if (i === adresses.ips.length-1) {
                i = 0
            } else {
                i++
            }
            client.on('error', (err) => {
                console.log(err)
            })
            client.on('close', () => {
                console.log('conn closed')
            })
        })
    })
})

const app = express()

app.use(cors())
app.use(express.json())

app.get('/db', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(object))
    res.end()
})

// eslint-disable-next-line no-unused-vars
app.listen(1000, () => {
    console.log('App is running on port 1000')
});
