//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
   🚀 *AFK Adventure* 
Embarking on an enchanting anime quest! You are AFK until you send a message. 
🧑‍🚀 *Adventurer:* ${conn.getName(m.sender)} 
📜 *Reason:* ${text ? text : ''}
  `)
}
handler.help = ['afk <reason>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
