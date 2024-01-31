
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Enter the title of a song\n\n📌Example *${usedPrefix + command}* Nf why`
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Video/Audio not found`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
≡ *MUSIC DOWNLOADER*
┌──────────────
✘ 📌 *Title* : ${title}
✘ 📆 *Published:* ${ago}
✘ ⌚ *Duration:* ${timestamp}
✘ 👀 *Views:* ${views}
└──────────────`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpig)

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *YTDL*\n\n✘ *⚖️Size* : ${size}\n✘ *🎞️Quality* : ${q}\n\n✘_The file exceeds the download limit_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *YTDL*\n\n✘ *⚖️Size* : ${size}\n✘ *🎞️Quality* : ${q}\n\n✘_The file exceeds the download limit_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *YTDL*
  
✘ *📌Title* : ${title}
✘ *🎞️Quality* : ${q}
✘ *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: Try again`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
