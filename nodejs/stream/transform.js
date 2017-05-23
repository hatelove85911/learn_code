var through = require('through2')

function write(buffer, encoding, next) {
  this.push()
}

function end(done) {
  
}

process.stdin.pipe(throught(write, end)).pipe(process.stdout)
