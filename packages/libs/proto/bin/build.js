/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const pbjs = require('protobufjs-cli/pbjs.js')
const pbts = require('protobufjs-cli/pbts.js') 
const fs = require('fs') 
if (!fs.existsSync('./dist')) {
    fs.rmdirSync('./dist')
    fs.mkdirSync('./dist')
}
pbjs.main(['-t', 'static-module', '-w', 'commonjs','-o', './dist/index.js', './src/msg.proto'])
pbts.main(['-o', './dist/index.d.ts', './dist/index.js'])
