var fs = require('fs')
var Readable = fs.createReadStream('./b.js')
var data = ''

Readable.on('data', function (chunk) {
  data += chunk
})

Readable.on('end', function () {
  console.log(data)
})
