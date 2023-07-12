const { open } = require('node:fs/promises');

(async () => {
    const file = await open('ip.txt')

    for await (const line of file.readLines()) {
        const reqOpt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ip: line.slice(0, line.search(':')),
                port: line.slice(line.search(':')+1)
            })
        }
        fetch('http://localhost:2000', reqOpt)
            .then(response => response.json())
    }
})();

(async () = => {

})