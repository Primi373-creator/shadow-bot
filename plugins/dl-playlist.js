
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Enter the title of a song\n\n*📌 Example*\n*${usedPrefix + command}* NF WHY `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.videos
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `✘ ⌚ *Duration:* ${v.timestamp}\n✘ 👀 *Views:* ${v.views}\n✘ 📌 *Title* : ${v.title}\n✘ 📆 *Published:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `✘ ⌚ *Duration:* ${v.timestamp}\n✘ 👀 *Views:* ${v.views}\n✘ 📌 *Title* : ${v.title}\n✘ 📆 *Published:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *MUSIC DOWNLOADER*🔎', `\n 📀Here is a list of results for :\n *${text}*`, fgig, `Click Here `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = true

export default handler
