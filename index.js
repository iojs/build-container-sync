var webhook = require('docker-webhook')
var spawn = require('child_process').spawn

webhook(function cb(req) {
  if( !req ||
      !req.repository ||
      req.repository.repo_name !== 'iojs/build') return null
      
  spawn('docker',['pull','-a','iojs/build'])
})
