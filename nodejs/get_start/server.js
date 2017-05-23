const http = require('http')

http.createServer((req, resp) => {
  resp.writeHead(200, {
    'Content-Type' : 'text/plain'
  })

  resp.write('hello, world!\n')

  resp.end()
}).listen('8888')
