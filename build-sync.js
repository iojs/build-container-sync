#!/usr/bin/env node
var forever = require('forever-monitor')

var child = new (forever.Monitor)(require.resolve('./index.js'))
child.start()
