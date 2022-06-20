const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home Page')
    }
    else if (req.url === '/about') {
        res.end('Welcome to short history')
    }
    else {
        res.end(`
        <h1> Ooop !!</h1>
        <p>Page Not Found </p>
        <a href="/"> back home </a>`)
    }
})

server.listen(5000)