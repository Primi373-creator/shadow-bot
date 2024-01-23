
let handler = async (m, { conn }) => {

m.reply(`
Here's my support group :${dygp}
`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = [ 'support'] 

export default handler
