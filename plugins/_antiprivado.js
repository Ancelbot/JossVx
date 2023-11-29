export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ʜᴀʙʟᴀʀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.*\n\n𝙎𝙞 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙗𝙤𝙩 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙯𝙖𝙙𝙤\n\n𝐇𝐚𝐛𝐥𝐚𝐫 𝐚: Wa.me/56986469687`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
