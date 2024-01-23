//import db from '../lib/database.js'
let reg = 40;
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `
How much do you want to bet?

📌 Example:
*${usedPrefix + command}* 100`.trim();
    
    if (!args[0]) throw fa;
    if (isNaN(args[0])) throw fa;
    
    let betAmount = parseInt(args[0]);
    let user = global.db.data.users[m.sender];
    let time = user.lastslot + 10000;

    if (new Date - user.lastslot < 10000) {
        throw `⏳ Wait *${msToTime(time - new Date())}* to use it again`;
    }

    if (betAmount < 100) {
        throw '✳️ Minimum bet is *100 XP*';
    }

    if (user.exp < betAmount) {
        throw `✳️ You don't have enough *XP*`;
    }

    let emojis = ["🕊️", "🦀", "🦎"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [], y = [], z = [];

    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }

    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }

    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }

    let end;

    if (a == b && b == c) {
        end = `🎁 YOU WON\n *+${betAmount + betAmount} XP*`;
        user.exp += betAmount + betAmount;
    } else if (a == b || a == c || b == c) {
        end = `🔮 Almost there, keep trying :)\nEarn *+${reg} XP*`;
        user.exp += reg;
    } else {
        end = `😔 You lost *-${betAmount} XP*`;
        user.exp -= betAmount;
    }

    user.lastslot = new Date * 1;

    return await m.reply(
        `
       🎰 ┃ *SLOTS* 
     ───────────
       ${x[0]} : ${y[0]} : ${z[0]}
       ${x[1]} : ${y[1]} : ${z[1]}
       ${x[2]} : ${y[2]} : ${z[2]}
     ───────────
        🎰┃🎰┃ 🎰
        
${end}`);
};

handler.help = ['slot <betAmount>'];
handler.tags = ['game'];
handler.command = ['slot'];

export default handler;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return seconds + " Second(s)";
}
