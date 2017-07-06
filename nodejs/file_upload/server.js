var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var path = require('path');

var counter = 0;

http
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
