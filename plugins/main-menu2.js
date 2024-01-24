
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use these commands without the prefix_

 ✘ If you have more audios,
send them to me on 2349150690169 with the *audio + command* to which it will respond.

╭━━〘 *AUDIOS* 〙──⊷
┃ ✘ Bot
┃ ✘ Good morning
┃ ✘ Good afternoon
┃ ✘ Good night
┃ ✘ Fine gentlemen
┃ ✘ Sad
╰━━━━━━━━━━━━━━⊷
`

    let pp = './src/Cid.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
