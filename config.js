import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['2349150690169', 'Cipher', true],
  ['2349067654525', 'Shadow', true]
] //Numeros de owner 

global.mods = ['2349150690169'] 
global.prems = ['2349150690169', '2349067654525']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' 
}

// Sticker WM
global.packname = 'Shadow bot' 
global.author = 'Cipher' 
global.fgig = 'Not on instagram!\n' 
global.dygp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.fgsc = 'https://github.com/Cipher0071/SHADOW-MD' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.pinimg.com/originals/63/a4/38/63a4386fd7b681ff490ac43e316e895b.jpg' 

global.wait = '⌛'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
