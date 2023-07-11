//Getting IP: str.slice(24, str.search('><PORT_TCP'))
//Getting port: str.slice(str.search('TCP')+4, str.search('><DEVICE_TYPE'))
//Getting device name: str.slice(str.search('NAME=')+5, str.search('><SERIAL_NUMBER'))
//Getting serial number: str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION'))

let str = 'REQREPLY_ALL<IP_ADDRESS=10.10.2.172><PORT_TCP=4001><DEVICE_TYPE=C32><DEVICE_NAME=PM C32.L><SERIAL_NUMBER=581647><SOFTWARE_VERSION=L1.0.0><INTERFACE=WLAN><STS=OK><CR><LF>\n'

console.log(str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION')))