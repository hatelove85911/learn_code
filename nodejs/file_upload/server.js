var http = require('http')
var fs = require('fs')

var counter = 0

http.createServer((req, resp) => {
  if (req.method === 'GET') {
    if (req.url === '/upload') {
      fs.readFile('index.html', function (err, contents) {
        if (err) {
          resp.writeHead(404, {
            'Content-Type': 'text/plain'
          })
          resp.end('not found!!')
        } else {
          resp.writeHead(200, {
            'Content-Type': 'text/html'
          })
          resp.end(contents)
        }
      })
    }

    if(req.url === '/uploaded') {
      fs.readdir('./fileUploaded', (err, files) => {
        resp.end('files uploaded')
      })
    }
  }

  if (req.method === 'POST') {
    if (req.url === '/uploadfile') {
      req.pipe(fs.createWriteStream(`./fileUploaded/tmp${++counter}`))
    }
  }


}).listen(9999)

console.log('server listening on port 9999')
