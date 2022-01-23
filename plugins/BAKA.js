let handler = async (m, { text }) => {
  m.reply(`

وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةً وَسَآءَ سَبِيلً

Artinya: "Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk." (QS. Al-Isra: 32).

Baca artikel detiknews, "Surat Al-Isra Ayat 32, Tentang Larangan Mendekati Zina

`)
}
handler.help = ['HENTAI']
handler.tags = ['internet']
handler.command = /^(hentai|ecchi)$/i
module.exports = handler
