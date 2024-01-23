
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `

≡ DONATION
You can contribute if you want to help keep the bot active

✘*whatsapp me @2349150690169
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate'] 

export default handler
