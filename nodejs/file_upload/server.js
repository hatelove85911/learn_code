var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var util = require('util')
const pug = require('pug');

var counter = 0

http
  .createServer((req, resp) => {
    if (req.method === 'GET') {
      if (req.url === '/upload') {
        fs.readFile('index.html', function(err, contents) {
          if (err) {
            resp.writeHead(404, {
              'Content-Type': 'text/plain',
            })
            resp.end('not found!!')
          } else {
            resp.writeHead(200, {
              'Content-Type': 'text/html',
            })
            resp.end(contents)
          }
        })
      }

      if (req.url === '/uploaded') {
        fs.readdir('./fileUploaded', (err, files) => {
          resp.writeHead(200, {
            'Content-Type': 'text/html'
          })

          resp.write(pug.renderFile('./loadedFiles.pug', {
            files
          }))
          resp.end()
        })
      }
    }

    if (req.method === 'POST') {
      if (req.url === '/uploadfile') {
        // parse a file upload
        var form = new formidable.IncomingForm()

        form.multiples = true;
        form.parse(req, function(err, fields, files) {
          fs.rename(files.file.path, `./fileUploaded/${files.file.name}`, function (err, data) {
            
          })

          resp.writeHead(301, {
            Location: '/uploaded'
          })
          resp.end()
        })
      }
    }
  })
  .listen(9999)

console.log('server listening on port 9999')
