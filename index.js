

console.log('✅ starting')

import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';
import express from 'express';
import path from 'path';
import { toBuffer } from 'qrcode';
import pino from 'pino';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, author } = require(join(__dirname, './package.json'));

const rl = createInterface(process.stdin, process.stdout);
const app = express();
const PORT = 3000;

say('Cipher Shadow', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
say(`Shadow bot by cipher`, {
  font: 'console',
  align: 'center',
  gradient: ['cyan', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  //---
 p.on('exit', (_, code) => {
    isRunning = false
    console.error('❎ An unexpected error occurred:', code)
    if (code === 0) return
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  //----
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')

app.use(express.static(path.join(__dirname, 'public')));

// Create a route to handle root requests
app.get('/', (req, res) => {
  // Send the HTML page with the QR code image
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Your existing code...
// ...

// Start the Express app on the specified port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
