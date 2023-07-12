const fs = require('fs');

let str = fs.readFileSync('ip.txt').toString()

fs.watch('ping.txt', () => {
    while(true) {
        const temp = str.slice(0, str.search('#'))
        const reqOpt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ip: temp.slice(0, temp.search(':')),
                port: temp.slice(temp.search(':')+1)
            })
        }
        fetch('http://localhost:2000', reqOpt)
            .then(response => response.json())

        str = str.slice(-(str.length - str.search('#'))+1)
        if(temp + '#' === str) break
    }
})
