let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/kata-kata/dare.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  m.reply(pickRandom(json))
}
handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
