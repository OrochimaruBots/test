let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'http://gentleninja.com/reviews/wp-content/uploads/2017/05/Bot-development-companies.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6283893344561@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM & JASA RUN 24 JAM ONLY •*
        
( ISI HARGA )
*SEWA BOT*
-2K 1MINGGU
-5K 1BULAN
-10K MANEN

*PREMIUM*
-1K 1MINGGU
-4K 1BULAN
-7K MANEN

*JASA RUN*
-20K 1BULAN
PERPANJANG 10K
☞𝑜𝑤𝑛𝑒𝑟 ❀ wa.me/${owner[0]} ✵
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'019191727299'}]}],
  headerImage: { productId: '019191727299',
  jpegThumbnail: baper },
  businessOwnerJid: `6283893345561@s.whatsapp.net`
  },
  footerText: 'https://m.youtube.com/c/KROZIRS',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
