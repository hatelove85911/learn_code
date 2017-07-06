<<<<<<< HEAD
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var path = require('path');
||||||| merged common ancestors
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
=======
var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var util = require('util')
const pug = require('pug');
>>>>>>> b0a0397c1a978741e53b3d6f0303209eec828df2

var counter = 0

http
<<<<<<< HEAD
	.createServer((req, resp) => {
		if (req.method === 'GET') {
			if (req.url === '/upload') {
				fs.readFile('index.html', function(err, contents) {
					if (err) {
						resp.writeHead(404, {
							'Content-Type': 'text/plain'
						});
						resp.end('not found!!');
					} else {
						resp.writeHead(200, {
							'Content-Type': 'text/html'
						});
						resp.end(contents);
					}
				});
			}

			if (req.url === '/uploaded') {
				fs.readdir('./fileUploaded', (err, files) => {
					resp.writeHead(200, {
						'Content-Type': 'text/plain'
					});
					files.map(function(file) {
						resp.write(file);
						resp.write('\n');
					});
					resp.end();
				});
			}
		}

		if (req.method === 'POST') {
			if (req.url === '/uploadfile') {
				var form = new formidable.IncomingForm();
				// parse a file upload
				var total = req.headers['content-length'];
                var progress = 0;

				req.on('data', function(chunk) {
					progress += chunk.length;
					var perc = parseInt(progress / total * 100);
					console.log('percent complete: ' + perc + '%\n');
                    resp.write()
				});
				form
					.parse(req)
					.on('file', function(name, file) {
						fs.createReadStream(file.path).pipe(fs.createWriteStream(path.resolve(__dirname, 'fileUploaded', file.name)));
					})
					.on('end', function() {
						resp.writeHead(301, {
							Location: '/uploaded'
						});
						resp.end();
					});
			}
		}
	})
	.listen(9999);

console.log('server listening on port 9999');
||||||| merged common ancestors
	.createServer((req, resp) => {
		if (req.method === 'GET') {
			if (req.url === '/upload') {
				fs.readFile('index.html', function(err, contents) {
					if (err) {
						resp.writeHead(404, {
							'Content-Type': 'text/plain'
						});
						resp.end('not found!!');
					} else {
						resp.writeHead(200, {
							'Content-Type': 'text/html'
						});
						resp.end(contents);
					}
				});
			}

			if (req.url === '/uploaded') {
				fs.readdir('./fileUploaded', (err, files) => {
					resp.end('files uploaded');
				});
			}
		}

		if (req.method === 'POST') {
			if (req.url === '/uploadfile') {
				// parse a file upload
				var form = new formidable.IncomingForm();

				form.parse(req, function(err, fields, files) {
                      fs.rename(files.file.path, `./fileUploaded/${files.file.name}`, (err, data) => {
                          resp.write(301, {
                              Location: '/uploaded'
                          });
                          resp.end();
                      });
				});
			}
		}
	})
	.listen(9999);

console.log('server listening on port 9999');
=======
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
>>>>>>> b0a0397c1a978741e53b3d6f0303209eec828df2
