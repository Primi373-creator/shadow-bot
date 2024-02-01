import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Africa/Lagos').format('HH')
let wib = moment.tz('AFrica/Lagos').format('HH:mm:ss')

let handler = async function (m, { conn, text, usedPrefix }) {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  let user = global.db.data.users[who]
let { exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let name = await conn.getName(m.sender)


let m2 = `
🚀 *_${greeting} %name senpai!!,Buckle up  We're going on an adventure!_* 🚀

┏━💼 _User Info:_ 💼━┓
┃ 👾  *User Tag:* ${taguser} 
┃ 🎩  *Name:* %name 
┃ 💎  *Diamonds:* ${diamond} 
┃ 🏆  *Rank:* ${role}
┃ 🎮  *XP:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _Today's Sauce!_ ⏰━┓
┃ 📆  *Today's Date:* ${date} 
┃ ⏲️  *Current Time:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _BOT STATUS:_🤖━━┓
┃ 💻  *Platform:* Linux 
┃ 📣  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 💌  *Database:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Total Users:* ${totaluser} 
┗━━━━━━━━━━━━━┛

💡 *_Remember, when in doubt, use .list, .menu or .help. It's like my magic spell book!_* 💡
`

     function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}   
let pp = `./src/${pickRandom([
  "Cid Kagenou.jpg",
  "ᴄɪᴅ ᴋᴀɢᴇɴᴏᴜ◾.jpg",
  "Cid.jpg",
  "dg.jpg",
  "download (1).jpg",
  "download (2).jpg",
  "download (3).jpg",
  "e.jpg",
  "g.jpg",
  "gh.jpg",
  "h.jpg",
  "KAGENOU.jpg",
  "r.jpg",
  "Shadow.jpg",
  "shadow.jpg"
])}`; 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'h2', 'm2', 'help2'] 

export default handler


function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Africa/Lagos').format('HH')
      let res = ""
      if (time >= 0) {
        res = "Ohayou gozaimasu 🌅🌄"
      }
      if (time >= 10) {
        res = "Konnichiwa 🏞☀️"
      }
      if (time >= 15) {
        res = "Konbanwa 🌇🌇"
      }
      if (time >= 18) {
        res = "Oyasumi nasai 🏙🌙"
      }
      return res
    }
