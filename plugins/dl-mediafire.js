
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
import fg from 'api-dylux'
let free = 150; // Download limit for free users
let prem = 300; // Download limit for premium users (if your server has less than 2GB, lower the limit)
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Enter the MediaFire link along with the command`
    if (!args[0].match(/mediafire/gi)) throw `❎ incorrect Link!`
    m.react(rwait)
    
    let limit = isPrems || isOwner ? prem : free
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = limit * 1024 < filesize
    let caption = `
📂 *MEDIAFIRE INFO*
📄 *Name:* ${filename}
📏 *Size:* ${filesizeH}
📝 *Extension:* ${ext}
📅 *Uploaded:* ${aploud}
${isLimit ? `\n⚠️ The file exceeds the download limit of *+${free} MB*\nUpgrade to premium to download files larger than *${prem} MB*` : ''} 
`.trim();
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)  
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let isLimit = limit * 1024 < filesizeB
    let caption = `
📂 *MEDIAFIRE INFO*
📄 *Name:* ${filename}
📏 *Size:* ${filesizeH}
📝 *Extension:* ${ext}
📅 *Uploaded:* ${aploud}
${isLimit ? `\n⚠️ The file exceeds the download limit of *+${free} MB*\nUpgrade to premium to download files larger than *${prem} MB*` : ''} 
`.trim();

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: intenta con otro link`)
}

  }
  
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = true
handler.premium = false

export default handler
