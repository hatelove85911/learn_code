var events = require('events')
var EventEmitter = events.EventEmitter

var aEvent = new EventEmitter()

aEvent.on('sss', function(){
  console.log('ddxxss')
})

aEvent.emit('sss')
aEvent.emit('sss')
aEvent.emit('sss')
aEvent.emit('sss')
