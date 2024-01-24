let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level Kamu Saat Ini *${user.level}*
Exp Kamu *${user.exp - min}/${xp}*
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
Selamat Level Kamu Naik Yang Sebelumnya Level
*${before}* Menjadi *${user.level}*

Exp Kamu Tersisa *${user.exp - min}/${xp}*
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
