//Getting IP: str.slice(24, str.search('><PORT_TCP'))
//Getting port: str.slice(str.search('TCP')+4, str.search('><DEVICE_TYPE'))
//Getting device name: str.slice(str.search('NAME=')+5, str.search('><SERIAL_NUMBER'))
//Getting serial number: str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION'))

const data = 'P1 ? -    0.0 g  ;P2          9.9 g  ;P3 v      0.000 kg ;P4 v      0.000 kg \n'

console.log(data.includes('0.0'))