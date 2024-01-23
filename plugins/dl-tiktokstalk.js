
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Enter the TikTok username`
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
✘ *🔖Name:* ${res.name}
✘ *🔖Username:* ${res.username}
✘ *👥Followers:* ${res.followers}
✘ *🫂Following:* ${res.following}
✘ *📌Desc:* ${res.desc}
✘ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`✳️ Make sure the username is from TikTok`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
