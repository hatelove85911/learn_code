var http = require('http')

http.createServer((req, resp) => {
  resp.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  resp.write('hello world')
  resp.end()
}).listen(9999)
