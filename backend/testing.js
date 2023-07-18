//Getting IP: str.slice(24, str.search('><PORT_TCP'))
//Getting port: str.slice(str.search('TCP')+4, str.search('><DEVICE_TYPE'))
//Getting device name: str.slice(str.search('NAME=')+5, str.search('><SERIAL_NUMBER'))
//Getting serial number: str.slice(str.search('NUMBER=')+7, str.search('><SOFTWARE_VERSION'))

const arr = [{"ip":"10.10.2.148","port":"4001","name":"NAME"},{"ip":"127.0.0.1","port":"4002","name":"NAME"},{"ip":"10.10.9.173","port":"4001","name":"NAME"}]

for(let items in arr) {
    let i = items
    console.log(i+1)
}