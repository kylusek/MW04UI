const net = require('net')
const client = new net.Socket()
let adressess = require('./db.json')
const express = require('express')
const cors = require('cors')
let data = ''
let object = []
let weights = []
let units = []

const app = express()

client.connect(4001, '10.10.9.173', () => {
    console.log('connected')
    setInterval(() => {
        client.write('SIA\r\n')
    }, 200)
    client.on('data', (result) => {
        data = result.toString().trim()
        object = {Weighnings: {
            one: {name: 'P1', weight: weights[0], unit: units[0]},
            two: {name: 'P2', weight: weights[1], unit: units[1]},
            three: {name: 'P3', weight: weights[2], unit: units[2]},
            four: {name: 'P4', weight: weights[3], unit: units[3]}
        }}
        weights[0] = data.slice(5, 15).replace(/\s+/g, '')
        units[0] = data.slice(15, 19).replace(/\s+/g, '')
        weights[1] = data.slice(25, 35).replace(/\s+/g, '')
        units[1] = data.slice(35, 39).replace(/\s+/g, '')
        weights[2] = data.slice(45, 55).replace(/\s+/g, '')
        units[2] = data.slice(55, 59).replace(/\s+/g, '')
        weights[3] = data.slice(65, 75).replace(/\s+/g, '')
        units[3] = data.slice(75, 79).replace(/\s+/g, '')
    })
    client.on('error', (err) => {
        console.log(err)
    })
    client.on('close', () => {
        console.log('conn closed')
    })  
})

app.use(cors())
app.use(express.json())

app.get('/db', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(object))
    res.end()
})
 
const server = app.listen(1000, () => {
    console.log('App is running on port 1000')
})
