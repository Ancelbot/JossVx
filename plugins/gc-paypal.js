const handler = async (m, {conn}) => {
  m.reply(global.paypal);
};
handler.command = /^(Papal|Comprar|comprar|Paypal)$/i;
export default handler;

global.paypal = `
𝗛𝗼𝗹𝗮 𝗘𝘀𝘁𝗲 𝗘𝘀 𝗘𝗹 Paypal 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗔𝗱𝗾𝘂𝗶𝗿𝗶𝗿 𝗘𝗹 𝗕𝗼𝘁  

💸 Numero : wa.me/56986469687
🫶🏼 𝗡𝗼𝗺𝗯𝗿𝗲 : Ancel Perleche
🤑 𝗣𝗿𝗲𝗰𝗶𝗼 : 7 usd

🙊 𝗔𝗩𝗜𝗦𝗢 : 𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮 𝗠𝗮𝗻𝗱𝗮𝗿 𝗖𝗼𝗺𝗽𝗿𝗼𝗯𝗮𝗻𝘁𝗲 𝗢 𝗖𝗮𝗽𝘁𝘂𝗿𝗮 𝗗𝗲𝗹 𝗣𝗮𝗴𝗼
`;
