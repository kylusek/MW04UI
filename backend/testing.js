//Getting IP: str.slice(24, str.search('><PORT_TCP'))
//Getting port: str.slice(str.search('TCP')+4, str.search('><DEVICE_TYPE'))
//Getting device name: str.slice(str.search('NAME=')+5, str.search('><SERIAL_NUMBER'))
//Getting serial number: str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION'))

const fs = require('fs')

fs.watch('ping.txt', () => {
    console.log('File changed')
})