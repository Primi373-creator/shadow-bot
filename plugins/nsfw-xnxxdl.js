
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 The group does not allow NSFW content\n\nTo enable, type \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ You are underage! Come back when you're over 18 years old`
  if (!text) throw `✳️ To search\n📌 Use: *${usedPrefix + command} <search>*\n\nTo download from URL:\n📌 Use: *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Enter a *xnxx.com* link`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.url_dl, xn.title + '.mp4', `
≡  *XNXX DL*
            
✘ *📌Title*: ${xn.title}
✘ *⌚Duration:* ${xn.duration}
✘ *🎞️Quality:* ${xn.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Error: Try again later`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error: Try again later`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
