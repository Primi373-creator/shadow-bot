let handler = async (m, { text, usedPrefix, command }) => {
    let points = 300;
    let responseMsg = `✳️ Select rock/paper/scissors\n\nExample: *${usedPrefix + command}* paper\n`;
    
    if (!text) throw responseMsg;

    let botChoice = Math.random();

    if (botChoice < 0.34) {
        botChoice = 'rock';
    } else if (botChoice > 0.34 && botChoice < 0.67) {
        botChoice = 'scissors';
    } else {
        botChoice = 'paper';
    }

    if (text == botChoice) {
        global.db.data.users[m.sender].exp += 100;
        m.reply(`✘ *Draw*\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\n🎁 Points (±)100 XP`);
    } else if (text == 'rock') {
        if (botChoice == 'scissors') {
            global.db.data.users[m.sender].exp += 300;
            m.reply(`✘ *You won!* 🎊\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\n🎁 Points *+${points} XP*`);
        } else {
            global.db.data.users[m.sender].exp -= 300;
            m.reply(`✘ *You lost*\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\nPoints *-${points} XP*`);
        }
    } else if (text == 'scissors') {
        if (botChoice == 'paper') {
            global.db.data.users[m.sender].exp += 300;
            m.reply(`✘ *You won!* 🎊\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\n🎁 Points *+${points} XP*`);
        } else {
            global.db.data.users[m.sender].exp -= 300;
            m.reply(`✘ *You lost*\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\nPoints *-${points} XP*`);
        }
    } else if (text == 'paper') {
        if (botChoice == 'rock') {
            global.db.data.users[m.sender].exp += 300;
            m.reply(`✘ *You won!* 🎊\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\n🎁 Points *+${points} XP*`);
        } else {
            global.db.data.users[m.sender].exp -= 300;
            m.reply(`✘ *You lost*\n\n‣ You: ${text}\n‣ DyLux: ${botChoice}\n\nPoints *-${points} XP*`);
        }
    } else {
        throw responseMsg;
    }
};

handler.help = ['ppt <rock/paper/scissors>'];
handler.tags = ['game'];
handler.command = ['ppt'];
handler.register = false;

export default handler;
