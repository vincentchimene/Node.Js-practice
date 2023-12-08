#!/usr/bin/node
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by Node.js')
fs.appendFileSync('notes.txt', '\nIt was done by Mr.Vin.')
