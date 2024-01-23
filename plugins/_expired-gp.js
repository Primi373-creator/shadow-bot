
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🚀 Sayonara, comrades! *${this.user.name}* is leaving the group.\n\nThe rental adventure has come to an end! 🌟`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
