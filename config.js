global.owner = [
  "6283176305101", 
  " 6283838172730"
]
global.botname = "Xyura - Botz"
global.ownername = "xyura"
global.pack = ""
global.author = " 乂 ㄚ ㄩ 尺 卂"
global.channelname = "!!"
global.channeljid = ""
global.autoswview = true // auto lihat sw
global.autotyping = true //auto mengetik 
global.autorecordtype = true //auto typing + recording
global.autorecord = true //autorecord
global.autoread = false //auto read messages
global.prefa = ['','!','.','#','&']

global.welcome = false
global.linkgc = "link grup lu"
global.linksl = "link saluran lu"
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})