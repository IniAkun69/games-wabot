let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'F', m)
}
handler.help = ['HENTAI']
handler.tags = ['internet']
handler.command = /^(hentai|ecchi)$/i
module.exports = handler
