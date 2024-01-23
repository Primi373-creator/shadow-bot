
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Enter the image you want to search\n\n📌 Example: *${usedPrefix + command}* Nf`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Result for: *${text}*`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler
