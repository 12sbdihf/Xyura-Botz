require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const nodemailer = require('nodemailer')
const fs = require('fs')
const translate = require("translate-google-api");
const os = require('os')
const util = require('util')
const path = require('path')
const FormData = require("form-data");
const { Hercai } = require('hercai');
const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const { exec, spawn, execSync } = require("child_process")
const yts = require ('yt-search');
const speed = require('performance-now')
const jsobfus = require('javascript-obfuscator')
const fg = require('api-dylux')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const qs = require('qs');
const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)






module.exports = async (xyu, m) => {
try {

const from = m.key.remoteJid

var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, formatp, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, getBuffer, runtime, getTime,tanggal, getRandom } = require('./lib/myfunc')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')


var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '!'
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (xyu.user.id.split(':')[0]+'@s.whatsapp.net' || xyu.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await xyu.decodeJid(xyu.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await xyu.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''

const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []


const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(time2 < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(time2 < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(time2 < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(time2 < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}


	//chat counter (console log)
if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: XyuraMods`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}
const isMedia = /image|video|sticker|audio/.test(mime)
 const qmsg = (quoted.msg || quoted)


try {
ppuser = await xyu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 

const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
const verif = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "Ｘｙｕｒａ - Ｂｏｔｚ"
}
}
};

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
global.public = false
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

async function reply(teks) {
    return xyu.sendMessage(m.chat, {
        text: `${teks}`,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                thumbnailUrl: ppuser, 
                title: `Haii ${pushname}`,
                body: `${waktuucapan}`,
                previewType: "PHOTO"
            }
        }
    }, { quoted: verif }); 
}

async function sendButton(jid, teks1) {
let msg = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks1
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By Xyuraa`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
									{
										"name": "cta_reminder",
										"buttonParamsJson": `{\"display_text\":\"Pengingat Hari Kiamat\",\"id\":\"message\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Group!!\",\"url\":\"https://chat.whatsapp.com/EUvs6YzVtm19NUUpiDCoxD",\"merchant_url\":\"https://www.google.com\"}`
									},
																		{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Saluran!!\",\"url\":\"https://whatsapp.com/channel/0029VaqBRU9ATRSkHSEfND1w\",\"merchant_url\":\"https://www.google.com\"}`
									}
],
}),
contextInfo: {
externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6283176305101/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
}
}})}}
}, {quoted: m})
await xyu.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}



async function replymenu(wow) {
    xyu.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: `${waktuucapan}`,
        mimetype: "application/pdf",
        fileLength: 999999999999999999999,
        pageCount: 999,
        caption: wow,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "xʏᴜʀᴀ -ᴍᴏᴅs",
                newsletterJid: "120363324795151892@newsletter",
            },
            externalAdReply: {  
                title: global.foter, 
                body: '©𝐗𝐲𝐮𝐫𝐚𝐁𝐨𝐭𝐳',
                thumbnail: fs.readFileSync("./Media/thumb.jpg"), // Menggunakan path lokal
                sourceUrl: global.url, 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: verif });
}

const replyzz = (teks) => {
            xyu.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Ｘｙｕｒａ - ｍｏｄｓ`,
            "body": `☣︎ᵛᶦʳᵘˢ☣︎`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./Media/thumb.jpg`),
            "sourceUrl": `https://taplink.cc/xyuraa`
        }
    }
},
{ quoted: ftroli })
        }



const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "ｘｙｕｒａ"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
}}

async function xyuraai(messages) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!Array.isArray(messages)) {
                messages = [messages];
            }

            const url = 'https://chatsandbox.com/api/chat';
            const requestData = {
                messages: messages,
                character: 'openai'
            };

            const headers = {
                "Content-Type": "application/json"
            };

            const response = await axios.post(url, requestData, { headers });

            if (response.status === 200 && response.data) {
                resolve(response.data);
            } else {
                reject(new Error('Failed to get a valid response'));
            }
        } catch (error) {
            reject(error);
        }
    });
}


async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
          
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}
          
async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await xyu.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await xyu.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function obfus(query) {

return new Promise((resolve, reject) => {

try {

const obfuscationResult = jsobfus.obfuscate(query,

{

compact: false,

controlFlowFlattening: true,

controlFlowFlatteningThreshold: 1,

numbersToExpressions: true,

simplify: true, 

stringArrayShuffle: true,

splitStrings: true,

stringArrayThreshold: 1

}

);

const result = {

status: 200,

author: `Me`,

result: obfuscationResult.getObfuscatedCode()

}

resolve(result)

} catch (e) {

reject(e)

}

})

}


async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
            })
            resolve(hasil)
        })
    })
}	
    

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const reactionMessage = ["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮", "😵", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠"]
const randomReaction = reactionMessage[Math.floor(Math.random() * reactionMessage.length)];


  async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


 if (global.autoRecording) {
        xyu.sendPresenceUpdate('recording', from)
        }
        xyu.sendPresenceUpdate('unavail 11 Ofable', from)
  
              
        if (global.autorecordtype) {
        let xyurecordin = ['recording','composing']
        let xyurecordinfinal = xyurecordin[Math.floor(Math.random() * xyurecordin.length)]
        xyu.sendPresenceUpdate(xyurecordinfinal, from)
        }
        
               if (autoread) {
            xyu.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        xyu.sendPresenceUpdate('composing', from)


        }
   
switch(command) {

case 'menu': case 'help': case 'allmenu': {
let m2 = "`"
let anu = `
Haii Kak ${pushname} Perkenalan Saya Adalah Bot WhatsApp *Xyura - Botz* Yang Siap Membantu Anda!

⊑ *INFORMATION* ⊒
ꆜ *Nama* : ${botname}
ꆜ *Owner* : ${ownername}
ꆜ *Prefix* : Multi Prefix
ꆜ *Versi* : 9.1.0 New
ꆜ *Platfrom* : Chrome ( Ubuntu )

 *${m2}乂 M E N U  A I${m2}*
♧  𝘨𝘦𝘮𝘪𝘯𝘪
♧  𝘨𝘦𝘮𝘪𝘯𝘪²
♧  𝘵𝘶𝘳𝘣𝘰
♧  𝘢𝘪
♧  𝘢𝘪2
♧  𝘦𝘥𝘪𝘵𝘦𝘦
♧  𝘩𝘦𝘳𝘤𝘢𝘪
♧  𝘺𝘰𝘶𝘴𝘦𝘢𝘳𝘤𝘩
♧  𝘵𝘹𝘵2𝘪𝘮𝘨
♧  𝘢𝘶𝘵𝘰𝘢𝘪
♧  𝘤𝘢𝘪
♧  𝘤𝘭𝘢𝘶𝘥𝘦

 *${m2}乂 M E N U  D O W N L O A D${m2}*  
♧  𝘵𝘪𝘬𝘵𝘰𝘬
♧  𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥
♧  𝘵𝘵𝘴𝘭𝘪𝘥𝘦
♧  𝘪𝘨
♧  𝘨𝘥𝘳𝘪𝘷𝘦
♧  𝘨𝘪𝘵𝘤𝘭𝘰𝘯𝘦

 *${m2}乂 M E N U  T O O L S${m2}*
♧  𝘱𝘭𝘢𝘺
♧  𝘳𝘷𝘰
♧  𝘩𝘥
♧  𝘴𝘱𝘢𝘮-𝘱𝘢𝘪𝘳𝘪𝘯𝘨
♧  𝘯𝘨𝘭𝘴𝘱𝘢𝘮
♧  𝘵𝘳𝘢𝘤𝘬𝘪𝘱
♧  𝘭𝘰𝘰𝘬𝘶𝘱
♧  𝘵𝘳𝘢𝘯𝘴𝘭𝘢𝘵𝘦
♧  𝘦𝘯𝘤
♧  𝘥𝘰𝘹

 *${m2}乂 M E N U  O W N E R${m2}*
♧  𝘢𝘶𝘵𝘰𝘴𝘸𝘷𝘪𝘦𝘸 [opsional]
♧  𝘢𝘶𝘵𝘰𝘳𝘦𝘤𝘰𝘳𝘥𝘵𝘺𝘱 [ᴏᴘsɪᴏɴᴀʟ]
♧  𝘢𝘶𝘵𝘰𝘳𝘦𝘤𝘰𝘳𝘥 [ᴏᴘsɪᴏɴᴀʟ] 
♧  𝘢𝘶𝘵𝘰𝘳𝘦𝘢𝘥 [ᴏᴘsɪᴏɴᴀʟ]
♧  𝘢𝘶𝘵𝘰𝘵𝘺𝘱𝘪𝘯𝘨 [ᴏᴘsɪᴏɴᴀʟ]
♧  𝘴𝘦𝘭𝘧
♧  𝘱𝘶𝘣𝘭𝘪𝘤
♧  𝘸𝘦𝘭𝘤𝘰𝘮𝘦
♧  𝘨𝘢𝘯𝘵𝘪𝘧𝘪𝘭𝘦
♧  𝘴𝘢𝘮𝘱𝘢𝘩
♧  𝘥𝘦𝘭𝘴𝘦𝘴𝘪
♧  𝘨𝘦𝘵𝘤𝘢𝘴𝘦
♧  𝘴𝘦𝘯𝘥𝘤𝘢𝘴𝘦
♧  𝘣𝘤𝘨𝘤
♧  𝘢𝘥𝘥𝘧𝘪𝘭𝘦
♧  𝘥𝘦𝘭𝘧𝘪𝘭𝘦
♧  𝘳𝘦𝘴𝘵𝘢𝘳𝘵
♧  𝘴𝘦𝘯𝘥𝘴𝘤

 *${m2}乂 M A I N  M E N U${m2}*
♧  𝘴𝘴𝘸𝘦𝘣
♧  𝘴𝘴𝘸𝘦𝘣²
♧  𝘧𝘢𝘬𝘦𝘵𝘸𝘦𝘦𝘵
♧  𝘴𝘤𝘳𝘪𝘱𝘵
♧  𝘰𝘸𝘯𝘦𝘳
♧  𝘵𝘪𝘯𝘺𝘶𝘳𝘭
♧  𝘵𝘰𝘶𝘳𝘭
♧  𝘱𝘪𝘯
♧  𝘸𝘮
♧  𝘴𝘵𝘪𝘤𝘬𝘦𝘳
♧  𝘯𝘱𝘮𝘴
♧  𝘵𝘰𝘪𝘮𝘨
♧  𝘵𝘰𝘮𝘱4
♧  𝘵𝘰𝘢𝘶𝘥𝘪𝘰
♧  𝘰𝘤𝘳

 *${m2}乂 G R O U P  M E N U${m2}*
♧  𝘬𝘪𝘤𝘬
♧  𝘢𝘥𝘥
♧  𝘱𝘳𝘰𝘮𝘰𝘵𝘦
♧  𝘥𝘦𝘮𝘰𝘵𝘦
♧  𝘳𝘦𝘴𝘦𝘵𝘭𝘪𝘯𝘬𝘨𝘤
`
replymenu(anu) 
xyu.sendMessage(m.chat, { audio: fs.readFileSync('./audio/menu.mp3'), viewOnce: false, seconds: "9999999999999999999999", ptt: true, mimetype: "audio/mpeg", fileName: "bot.mp3", waveform: [0, 153, 0, 494, 976] }, { quoted: verif })
}
break;

case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    xyu.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break

case "bingimg": {
if (!text) return reply("Query Nya Mana Kak?")
async function sendBingimgImages() {
const vaht = await axios.get("https://widipe.com/bingimg?text="+text)
const foto1 = await createImage(vaht.data.result[0])
const foto2 = await createImage(vaht.data.result[1])
const foto3 = await createImage(vaht.data.result[2])
const foto4 = await createImage(vaht.data.result[3])
let push = []
push.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `Foto Ke 1`
}),
footer: proto.Message.InteractiveMessage.Footer.fromObject({
text: "By XyuraBotz"
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: 'Hasil Nya',
hasMediaAttachment: true,
imageMessage: foto1
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Source","url":"${vaht.data.result[0]}","merchant_url":"${vaht.data.result[0]}"}`
}
]
})
})
push.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `Foto Ke 2`
}),
footer: proto.Message.InteractiveMessage.Footer.fromObject({
text: "By XyuraBotz"
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: 'Hasil Nya',
hasMediaAttachment: true,
imageMessage: foto2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Source","url":"${vaht.data.result[1]}","merchant_url":"${vaht.data.result[1]}"}`
}
]
})
})
push.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `Foto Ke 3`
}),
footer: proto.Message.InteractiveMessage.Footer.fromObject({
text: "By XyuraBotz"
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: 'Hasil Nya',
hasMediaAttachment: true,
imageMessage: foto3
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Source","url":"${vaht.data.result[2]}","merchant_url":"${vaht.data.result[2]}"}`
}
]
})
})
push.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `Foto Ke 4`
}),
footer: proto.Message.InteractiveMessage.Footer.fromObject({
text: "By XyuraBotz"
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: 'Hasil Nya',
hasMediaAttachment: true,
imageMessage: foto4
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Source","url":"${vaht.data.result[3]}","merchant_url":"${vaht.data.result[3]}"}`
}
]
})
})
const bot = generateWAMessageFromContent(xyu.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({
text: "Ilustrasi Yang Anda inginkan"
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "4 Image -"
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: false
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [
...push
]
})
})
}
}
}, {})
xyu.relayMessage(xyu.chat, bot.message, { messageId: bot.key.id })
}
sendBingimgImages()
}
break

case 'download': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);

    class Fuck extends Error {
        constructor(message) {
            super(message);
            this.name = "Fuck";
        }
    }

    class API {
        constructor(search, prefix) {
            this.api = {
                search: search,
                prefix: prefix
            };
        }

        headers(custom = {}) {
            return {
                'Content-Type': 'application/x-www-form-urlencoded',
                'authority': 'retatube.com',
                'accept': '*/*',
                'accept-language': 'id-MM,id;q=0.9',
                'hx-current-url': 'https://retatube.com/',
                'hx-request': 'true',
                'hx-target': 'aio-parse-result',
                'hx-trigger': 'search-btn',
                'origin': 'https://retatube.com',
                'referer': 'https://retatube.com/',
                'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
                'sec-ch-ua-mobile': '?1',
                'sec-ch-ua-platform': '"Android"',
                'user-agent': 'Postify/1.0.0',
                ...custom
            };
        }

        handleError(error, context) {
            const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
            console.error(`[${context}] Error:`, errors);
            throw new Fuck(errors);
        }

        getEndpoint(name) {
            return this.api[name];
        }
    }

    class RetaTube extends API {
        constructor() {
            super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
        }

        async getPrefix() {
            try {
                const response = await axios.get(this.getEndpoint('prefix'));
                return this.scrapePrefix(response.data);
            } catch (error) {
                this.handleError(error, 'GetPrefix');
            }
        }

        scrapePrefix(htmlContent) {
            const $ = cheerio.load(htmlContent);
            const prefix = $('#aio-search-box input[name="prefix"]').val();
            return prefix;
        }

        async fetch(videoId) {
            try {
                const prefix = await this.getPrefix();
                const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
                return this.parseHtml(response.data);
            } catch (error) {
                this.handleError(error, 'Fetch');
            }
        }

        parseHtml(htmlContent) {
            const $ = cheerio.load(htmlContent);
            const result = {
                title: '',
                description: '',
                videoLinks: [],
                audioLinks: []
            };

            $('.col').each((_, element) => {
                const titles = $(element).find('#text-786685718 strong').first();
                result.title = titles.text().replace('Title：', '').trim() || result.title;

                const description = $(element).find('.description').text();
                result.description = description.trim() || '';

                $(element).find('a.button.primary').each((_, linkElement) => {
                    const linkUrl = $(linkElement).attr('href');
                    const quality = $(linkElement).find('span').text().toLowerCase();

                    if (linkUrl !== 'javascript:void(0);') {
                        if (quality.includes('audio')) {
                            result.audioLinks.push({
                                quality: quality,
                                url: linkUrl
                            });
                        } else {
                            result.videoLinks.push({
                                quality: quality,
                                url: linkUrl
                            });
                        }
                    }
                });
            });

            return result;
        }

        async scrape(links) {
            try {
                return await this.fetch(links);
            } catch (error) {
                console.error(`${error.message}`);
                throw error;
            }
        }
    }

    const retatube = new RetaTube();
    try {
        await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0];
            await xyu.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }
        await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break 

case 'totalfitur':
case 'totalfeature':{
let fitur = `
*TOTAL FEATURE*

• BerJumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(fitur)
}
break

case "ocr":{
let q = m?.quoted ? m?.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await xyu.downloadAndSaveMediaMessage(q)
let url = await uploadToCatbox(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply(hasil.ParsedResults[0].ParsedText)
}
break

case 'sendsc': {
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply('Kutip pesan seseorang!')
edit2("Memproses pengiriman...", "Script berhasil terkirim!")
let a = getTime().split("T")[1].split("+")[0]
let t = q.split(' ');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await xyu.onWhatsApp(u.split`@`[0]))[0] || {}
var name = `XyuraBotz` // Gak bisa pakai spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await xyu.sendMessage(u, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'restart':
if (!isCreator) return reply('ᴋʜᴜsᴜs xʏᴜʀᴀᴀ ᴅᴏᴀɴᴋ')
reply(`ᴍʀᴇsᴛᴀʀᴛ xʏᴜʀᴀᴀ ʙᴏᴛᴢ....`)
await sleep(3000)
process.exit()
break

case 'hercai': {
const { Hercai } = require('hercai');
const herc = new Hercai();
if (!text) return reply('Mau tanya apa??')
herc.question({ model:"v3", content: text }).then(response => {
reply(response.reply);
})
}
break

case 'lookup': {
  if (!text) return reply("Example: .lookup https://www.example.com")
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await reply(`Please Wait`)
  let o
  try {
    o = await exec('nslookup ' + text)
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    reply(stdout)
    if (stderr.trim()) reply(stderr)
  }
}
break

case 'enc':
if (!isCreator) return reply(global.nocreator)
if (!q) return reply(`Example ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
break

case 'editee': {
    if (!q) return reply(`_Tanya Ap?`);
// wm avz
    async function getSession() {
        const res = await axios.get("https://editee.com/chat-gpt");
        return res.headers['set-cookie'] ? res.headers['set-cookie'][0].split(';')[0].split('=')[1] : null;
    }
// wm avz
    async function avz(query) {
        const sessionCookie = await getSession();
        const headers = {
            "content-type": "application/json",
            "cookie": `editeecom_session=${sessionCookie}`,
            "user-agent": "Mozilla/5.0",
            "x-requested-with": "XMLHttpRequest"
        };
// wm avz
        const response = await axios.post("https://editee.com/submit/chatgptfree", {
            context: " ",
            selected_model: "gemini",
            important: `aV77OsKy`, // ubah aja kalau mau error wkwk
            user_input: query
        }, { headers });
// wm avz
        return response.data;
    }
// wm avz
    try {
        const answer = await avz(q);
        reply(answer.text);
    } catch (error) {
        console.error("Error :", error);
        reply("Terjadi ?.");
    }
}
break



case 'trackip':
{
if (!text) return reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
await xyu.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
reply(formatIPInfo(res)); 
} catch (e) { 
reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break


/*
* 
* [ *CASE GEMINI ALL IN ONE* ]
* https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
**/

case 'gemini2': {
//created by hann dont hapus wm
  let hann1 = args[0]
  let hann2 = text
  const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
//created by hann dont hapus wm
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const path = require("path");
  const Used_Apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const genAI = new GoogleGenerativeAI(Used_Apikey);
  const fileManager = new GoogleAIFileManager(Used_Apikey);
  switch (hann1) {
    case 'chat':
//created by hann dont hapus wm
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const modello = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: safetySettings });
const prompttt = hann2;
const resultt = await modello.generateContent(prompttt);
const responsek = await resultt.response;
const textt = responsek.text();
reply(textt);
break;
//created by hann dont hapus wm
case 'chatprompt':
const modell = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Nama Kamu Adalah XyuraBotz, Sifat Kamu Adalah Baik, Imut, dan Tenang dalam dirinya. Kamu Dibuat oleh Xyura Jika ada yang ditanyakan sama Xyura kamu marah",
});
const promptt = hann2;
const resultp = await modell.generateContent(promptt);
const responseqo = await resultp.response;
const textl = responseqo.text();
reply(textl);
  break;
  case 'audio':
                        if (!hann2) return reply('Mana audio sama perintahnya?')
                        const modelll = genAI.getGenerativeModel({
                            model: "gemini-1.5-flash",
                        });
                        const fileBuffer = await m.quoted.download()
                        const base64AudioFile = fileBuffer.toString("base64"); // Convert file content to Base64
                        const tempFilePathAud = path.join(__dirname, `temp_audio_${Date.now()}.mp3`);
                        fs.writeFileSync(tempFilePathAud, fileBuffer);
                        if (/audio/.test(mime)) {
                            const audioFile = await fileManager.uploadFile(tempFilePathAud, {
                                mimeType: "audio/mp3",
                            });
                            console.log(`Uploaded file ${audioFile.file.uri}`);
   fs.unlinkSync(tempFilePathAud);
                            const result = await modelll.generateContent([
                                {
                                    inlineData: {
                                        mimeType: "audio/mp3",
                                        data: base64AudioFile
                                    }
                                },
                                { text: hann2 },
                            ]);                        
                            reply(result.response.text())
                        } else reply(`Reply/kirim audionya!`)
                    break
//created by hann dont hapus wm
    case 'image':
                        const modepl = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        });
                        const fileBufferr = await m.quoted.download()
                        const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
                        fs.writeFileSync(tempFilePath, fileBufferr);
                        if (/image/.test(mime)) {
                            const uploadResponse = await fileManager.uploadFile(tempFilePath, {
                                mimeType: "image/jpeg",
                                displayName: `temp_image_${Date.now()}`,
                            });
                            // Delete the temporary file after upload
                            fs.unlinkSync(tempFilePath);
                            console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
                            const result = await modepl.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponse.file.mimeType,
                                        fileUri: uploadResponse.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            reply(result.response.text())
                        } else reply(`Reply to the image`)
                    break;
//created by hann dont hapus wm
                    case 'video':
                     const modelk = genAI.getGenerativeModel({
                            model: "gemini-1.5-pro",
                        }); 
const fileBufferrp = await m.quoted.download()
                        const tempFilePathp = path.join(__dirname, `temp_video_${Date.now()}.mp4`);
                        fs.writeFileSync(tempFilePathp, fileBufferrp);
if (/video/.test(mime)) {
                            const uploadResponseee = await fileManager.uploadFile(tempFilePathp, {
                                mimeType: "video/mp4",
                                displayName: `temp_video_${Date.now()}`,
                            });
                            fs.unlinkSync(tempFilePathp);
                            console.log(`Uploaded file ${uploadResponseee.file.displayName} as: ${uploadResponseee.file.uri}`);
                            const hasilnya = await modelk.generateContent([
                                {
                                    fileData: {
                                        mimeType: uploadResponseee.file.mimeType,
                                        fileUri: uploadResponseee.file.uri
                                    }
                                },
                                { text: 'gunakan bahasa indonesia' + hann2 },
                            ]);
                            reply(hasilnya.response.text())
                        } else reply(`Reply to the video`)
                        break;
//created by hann dont hapus wm
      case 'help':
        reply(`
.gemini2 help - untuk melihat command
.gemini2 chatprompt - chat dengan gemini menggunakan prompt dari xyura
.gemini2 chat - mengobrol sama gemini menggunakan keamanan
.gemini2 image - chat menggunakan foto dengan gemini
.gemini2 audio - chat menggunakan audio dengan gemini
.gemini2 video - chat menggunakan video dengan gemini
        `)
        break;
default:
xyu.sendMessage(m.chat, { text: "Maaf kak, jika ada bantuan nya ketik .gemini2 help" });
}
}
break

case 'clearall': {
if (!isCreator) return reply('Fitur Khusus Owner!')
xyu.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break


case 'tinyurl':{
 if(!q) return reply('link?')
 const request = require('request')
 request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
 try {
 reply(body)
 } catch (e) {
 reply(e)
 }
 })
 }
 break

case 'ais': case 'yousearch': {
  let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

    if (!text) return reply(input)
  const website = axios.create({
  baseURL: "https://app.yoursearch.ai",
  headers: {
    "Content-Type": "application/json",
  },
});

const yousearch = async (searchTerm) => {
  const requestData = {
    searchTerm: searchTerm,
    promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
    searchParameters: "{}",
    searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
  };

  try {
    const response = await website.post("/api", requestData);
    return response.data.response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

let hanjing = await yousearch(text)
reply(`${hanjing}`)
}
break

case "delfile":
if (!isCreator) return 
if (!text) return reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(text)
reply ("Done")
break

case 'remini': case 'hd': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
reply(mess.wait)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
xyu.sendMessage(m.chat, { image: proses, caption: mess.selesai}, { quoted: m})
}
break


case 'addfile': {
    if (!isCreator) return
    if (!text.includes("./")) return reply(`Contoh: ${prefix + command} ./path/to/file.txt`);
    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return reply('Direktori tidak ditemukan!');
    }
    
    // Pastikan pesan yang dikutip berisi dokumen
    if (!m.quoted) {
        return reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); // Gunakan let agar buffer bisa diubah
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break


case 'sendfitur': case 'sendcase': {
if (!isCreator) return reply(mess.owner);
if (!m.quoted) return reply('Kutip pesan seseorang!');
if (!text) return reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await xyu.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih dari Xyura!\n\n${caseCode}`;
await xyu.sendMessage(recipient, { text: message }, { quoted: m });
reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => reply(`Terjadi kesalahan: ${error.message}`));
}
break

case 'savekontak': case 'svkontak':
if (!isCreator) return reply(`Ngapain ? Khusus Xyura!!`)
if (!isGroup) return reply(`Khusus Group ya bang`)
let cmiggc = await xyu.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './database/contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
xyu.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break

case "pushkontak":
if (!isCreator) return reply(`Ngapain ? Khusus  乂 ㄚ ㄩ 尺 卂 🔥 Aja !!`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bang Xyura")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await xyu.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await xyu.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await xyu.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Bang xyura!")
break

case 'xyu': {
    var textt = text;
    if (!textt) return reply(`Apaa?`);
    textt = textt.trim();
    
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const { GoogleAIFileManager } = require("@google/generative-ai/server");
    const fs = require('fs');
    const path = require('path');
    
    const Used_Apikey = "API_GEMINI_MU";
    const genAI = new GoogleGenerativeAI(Used_Apikey);
    const fileManager = new GoogleAIFileManager(Used_Apikey);
    
    try {
        const modelConfig = {
            model: "gemini-1.5-pro",
            systemInstruction: `Kamu adalah Tanga Xyura, kamu sering dipanggil ibukii, jenis kelamin kamu perempuan. Bahasa utamamu adalah Indonesia. Jangan memakai emoji saat kamu membalas pesan. Kamu suka double huruf terakhir saat membalas pesan. Kamu memiliki sifat seperti perempuan lucu dan imut.`
        };
        
        const modepl = genAI.getGenerativeModel(modelConfig);
        let fileBufferr;
        let mimeType;
        let tempFilePath;

        if (/image/.test(mime)) {
            mimeType = "image/jpeg";
            tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
        } else if (/video/.test(mime)) {
            mimeType = "video/mp4"; // Perbaikan MIME type
            tempFilePath = path.join(__dirname, `temp_video_${Date.now()}.mp4`);
        } else if (/audio/.test(mime)) {
            mimeType = "audio/mp3";
            tempFilePath = path.join(__dirname, `temp_audio_${Date.now()}.mp3`);
        } else {
            const modelr = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: modelConfig.systemInstruction
            });
            const resultr = await modelr.generateContent(textt);
            const responser = await resultr.response;
            const textr = responser.text();
            var conv = textr ? textr.replace(/Xyurai: /g, '') : "Maaf, aku ga ngerti";
            return reply(conv);
        }

        fileBufferr = m.quoted ? await m.quoted.download() : await m.download();
        fs.writeFileSync(tempFilePath, fileBufferr);
        
        const uploadResponse = await fileManager.uploadFile(tempFilePath, {
            mimeType: mimeType,
            displayName: path.basename(tempFilePath)
        });
        
        fs.unlinkSync(tempFilePath);
        console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
        
        const result = await modepl.generateContent([
            {
                fileData: {
                    mimeType: uploadResponse.file.mimeType,
                    fileUri: uploadResponse.file.uri
                }
            },
            { text: textt },
        ]);
        
        const jawabann = result.response.text();
        var conv = jawabann ? jawabann.replace(/Xyurai: /g, '') : "Maaf, aku ga ngerti";
        reply(conv);
        
    } catch (e) {
        reply(`Gabisaa`);
        console.error(e); // Gunakan console.error untuk kesalahan
    }
}
break;


case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await xyu.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    xyu.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://tmpfiles.org/dl/13274499/tmp.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break

case 'get': {
  if (!isCreator) return
if (!text && !m.quoted) return reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return reply(textData);
} else if (text.includes('webp')) {
return xyu.imgToSticker(m.chat, text, m, { packname: "", author: "Xyura - Mods!!" })
} else if (/image/i.test(contentType)) { return xyu.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return xyu.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return xyu.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return xyu.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return xyu.sendFile(m.chat, text, '', text, m)
} else {
return reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case 'turbo': {
if (!q) return reply(`where the question`)
const fetch = require('node-fetch');
// wm avz
async function avvmx(av) {
    try {
        const avis = await fetch("https://www.turboseek.io/api/getAnswer", {
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; Infinix HOT 40 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
                Referer: "https://www.turboseek.io/",
                "av-Type": "application/json"
            },
            body: JSON.stringify({
                question: av,
                sources: []
            })
        });
// wm avz
        const data = await avis.text();
        const avv = data.split("\n").map(line => {
            try {
                return JSON.parse(line.slice(6)).text;
            } catch (e) {
                return "";
            }
        });
// wm avz
        const avosky = avv.join("").trim();
        const avoskyy = `${avosky}`;
// wm avz
        return avoskyy.trim();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
// wm avz
async function avoskyyy(m, question) {
    const answer = await avvmx(question);
    if (answer) {
        reply(answer);
    } else {
        reply("Terjadi kesalahan.");
    }
}
// wm avz
const avosks = `${q}`  
avoskyyy(m, avosks);
}
break

case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
        
 case 'esce':
case "script": 
 case "sc":
 xyu.relayMessage(m.chat, {
 "requestPaymentMessage": {
 amount: { 
 value: 2022000,
 offset: 0,
 currencyCode: 'IDR'
 },
 amount1000: 55000000,
 background: null,
 currencyCodeIso4217: 'USD',
 expiryTimestamp: 0,
 noteMessage: {
 extendedTextMessage: {
 text: 
 
 `
Hay Kak ${pushname} 👋
${waktuucapan}

 
*INFO SCRIPT XYURABOTZ*
base    : Rifky
type     : case
bailey   : @adiwashing/baileys
connect : pairing code
support : panel/termux
•-------------------------------------------------•`
 }
 },
 requestFrom: m.sender
 }
 }, {})
break



case 'creator': case 'owner': {
    await xyu.sendMessage(m.chat, {
        react: {
            text: "",
            key: m.key,
        }
    })
    const fs = require('fs');
    
    // Ambil gambar dari direktori lokal
    let imgPath = './Media/thumb.jpg';
    let imgBuffer = fs.readFileSync(imgPath);
    
    async function image(buffer) {
        const {
            imageMessage
        } = await generateWAMessageContent({
            image: buffer // Gunakan buffer dari gambar lokal
        }, {
            upload: xyu.waUploadToServer
        })
        return imageMessage;
    }

    let msg = generateWAMessageFromContent(
        m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: (`Nih owner ku ⇩`)
                        },
                        carouselMessage: {
                            cards: [{
                                header: {
                                    imageMessage: await image(imgBuffer), // Ubah di sini untuk gunakan buffer
                                    hasMediaAttachment: true,
                                },
                                body: {
                                    text: `*Owner xyura*`
                                },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: '{"display_text":"👤 Owner","url":"https:\\/\\/wa.me\\/6283176305101?text=Halo+atmin"}',
                                    }],
                                },
                            }],
                            messageVersion: 1,
                        },
                    },
                },
            },
        }, {});
    await xyu.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });
await xyu.sendMessage(m.chat, {audio: fs.readFileSync('./audio/dead.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted: verif })
}
break

case 'sampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("zip") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return reply(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	reply(`${teks}`)
	
//	await sleep(2000)
	reply("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	reply("Berhasil menghapus semua Kenangan <3")
	 
	});
	  }
	break

case 'swm': case 'steal': case 'wm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
xyu.downloadAndSaveMediaMessage(quoted, "gifee")
xyu.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await xyu.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await xyu.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await xyu.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    xyu.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await xyu.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await xyu.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await xyu.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                xyu.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await xyu.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                xyu.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `XyuraBotz.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await xyu.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                xyu.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await xyu.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await xyu.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) {
        return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-10 Seconds`);
    }
    await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    if (/image/.test(mime)) {

        let media = await quoted.download();

        let encmedia = await xyu.sendImageAsSticker(m.chat, media, m, {
            packname: global.pack,
            author: global.author 
        });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) {

            return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
        }
        let media = await quoted.download();

        let encmedia = await xyu.sendVideoAsSticker(m.chat, media, m, {

            packname: global.pack,

            author: global.author 

        });

    } else {

        return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);

    }

    await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

}

break;


case 'smeme2': 
{
 if (!text) reply`contoh : smeme Hello|world`
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await xyu.downloadAndSaveMediaMessage(quoted)
mem = await uploadToCatbox(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`)
                    xyu.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
                }
                }
                break
                

case 'smeme': 
{
 if (!text) reply`Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await xyu.downloadAndSaveMediaMessage(quoted)
mem = await uploadToCatbox(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
                    xyu.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
                }
                }
                break

case 'brat': {
  if (!text) {
    return reply(`*⚠️ ALERT*\n_Cara penggunaan fitur *${command}*_\n*Example:* ${prefix + command} Hai ${pushname}_`);
  }

  if (text.length > 250) {
    return reply(`*⚠️ ALERT*\n_Text tidak boleh lebih dari 250 karakter!!_`);
  }
  
  reply(`*_Loading..._*`)

  xyu.sendMessage(
        m.chat,
        { 
          image: { url: `https://mxmxk-helper.hf.space/brat?text=${text}` },
          caption: `_Sukses Generate Brat Font_\n\n_Silahkan Reply Chat ini dengan caption *.s* untuk mengubahnya menjadi sticker_`,
          mentions: [m.sender]
      },
      { quoted: m }
    );
}
break;


case 'ai2': {
// wm avz
 const avz = async (prompt) => {
 const url = new URL("https://yw85opafq6.execute-api.us-east-1.amazonaws.com/default/boss_mode_15aug");
 url.search = new URLSearchParams({
 text: prompt,
 country: "Europe",
 user_id: "Av0SkyG00D" // ubah aja kalau mau eror wkwk
 }).toString();
// wm avz
 try {
 const response = await fetch(url, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Linux; Android 11; Infinix) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Mobile Safari/537.36",
 Referer: "https://www.ai4chat.co/pages/riddle-generator"
 }
 });
// wm avz
 if (!response.ok) throw new Error(`Error: ${response.status}`);
 return await response.text();
 } catch (error) {
 console.error("Fetch error:", error);
 throw error; // apa
 }
 };
// wm avz
 const avoskybaik = `${encodeURIComponent(text)}`
 try {
 const answer = await avz(avoskybaik);
 reply(answer);
 } catch (error) {
 reply("Terjadi!!?!!!?!.");
 }
}
break

             case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
            }
            break

case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  xyu.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m })     
}
break

case 'hentaivid': {
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
xyu.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break

case 'nglspam': {
if (!isCreator) return reply(msg.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam XyuraBotz|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break

/*
-
- [ *CASE REMINI & HD* ]
- https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
-
**/

//created by hann, gausah hapus wm gblk😹


case 'hdr': {
const sharp = require('sharp');
async function upscaleImage(inputPath) {
  try {
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, inputPath);
    await sharp(inputPath)
      .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: false })
      .sharpen()
      .linear(1.2, -(128 * 1.2) + 128)  // Increase contrast
      .modulate({ brightness: 0.98 })    // Increase brightness
      .toFile(tempFilePath);
    await xyu.sendMessage(m.chat, {image: fs.readFileSync(tempFilePath)})
fs.unlinkSync(tempFilePath);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

//contohnya
const bufferImage = await m.quoted.download()
return upscaleImage(bufferImage)
}
break

case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break       

case 'gfl': case "gantifile": case 'g': {
if (!isCreator) return 
if (!text.includes("./")) return reply(`*Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
reply(`Mengupload`)
await sleep(2000)
reply(`Berhasil mengganti file ${q}`)
}
break

case 'ssweb2': {
if (!text) throw `Example: ${prefix + command} https://github.com`
reply(mess.wait)
let buf = await getBuffer(`https://image.thum.io/get/width/1900/crop/1000/fullpage/${q}`)
xyu.sendMessage(m.chat, { image: buf, caption: `done` }, { quoted: m})
}
break

case 'ss': case 'ssweb': {
				if (!text) return reply(`Example: ${prefix + command} https://github.com/DGXeon`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await xyu.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await xyu.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
	

case "p": case '🗿': {
await xyu.sendMessage(m.chat, { react: { text: "🗿",key: m.key,}})
}
break 

 case 'deletesession':
            case 'delsession':
            case 'clearsession':
            case 'delsesi': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break

case 'ttslide':
case 'tiktokslide': {
    if (!text) return xyu.sendMessage(m.chat, { text: 'Mana Kak Linknya?' });
    const urol = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`;
    const response = await axios.get(urol);
    const html = response.data;
    const $ = cheerio.load(html);
    const imgSrc = [];
    const creator = 'Ido404';

    $('div.col-md-12 > img').each((index, element) => {
        imgSrc.push($(element).attr('src'));
    });

    if (imgSrc.length === 0) return xyu.sendMessage(m.chat, { text: 'Tidak ada gambar ditemukan.' });
    await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    for (let img of imgSrc) {
        await xyu.sendMessage(m.chat, { image: { url: img } });
    }
    await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'everyone': {
if (!isCreator) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
xyu.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *${global.botname}* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break

case 'tiktok':
case 'tt': {
if (!m.quoted && !text) return reply('reply')
    if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
    const api = require('btch-downloader')
    if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
    if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
    let link = text || m.quoted.text; // Gunakan teks dari reply jika text tidak diberikan
    if (!link) return reply('Mana Kak Linknya?');
    try {
        await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
        let maximus = await api.ttdl(args[0]);
        let caption = `乂 *T I K T O K  D O W N L O A D* \n\n• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* \n${maximus.title}\n\n• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* \n${maximus.title_audio}\n\n${global.botname}`;
        
        await xyu.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption });
        await xyu.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (e) {
        console.log(e);
        reply(e);
    }
}
break


case 'welcome':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    welcome = true
                    reply(`Successfully changed welcome to ${q}`)
                } else if (q === 'off') {
                    welcome = false
                    reply(`Successfully changed welcome to ${q}`)
                }
                break

case 'igdl':
case 'instagram':
case 'ig': {
    if (!text) return reply(`Anda perlu memberikan URL video, reel`);
    let res;

    try {
        await xyu.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return reply(`No video or image found or Invalid response from API.`);
    }

    try {
        const mediaData = api_response.result[0];
        const mediaURL = mediaData.url;
        const cap = `HERE IS THE VIDEO`;

        await xyu.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        return reply(`Failed to send media: ${error}`);
    }
}
break

   case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await xyu.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    xyu.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await xyu.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await xyu.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaudio':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await xyu.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                xyu.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }

case 'rvo': case 'x': case '🐦': case 'lihat': {
    const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
    if (!isQuotedViewOnce) return reply('Reply viewonce');
    let type = Object.keys(m.quoted.message)[0];
    let quotedType = m.quoted.message[type];
    let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video");
    let buffer = Buffer.from([]);
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    if (/video/.test(type)) {
        await xyu.sendMessage(m.chat, { video: buffer, caption: quotedType.caption });
    } else if (/image/.test(type)) {
        await xyu.sendMessage(m.chat, { image: buffer, caption: quotedType.caption });
    }
    await xyu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break


case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            reply(`${message}`);
        } else {
            reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
case 'ai': {
if (!m.quoted && !text) return reply('teks? ') 
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah XyuraBotz, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
reply(kanjuthann)
}
break


case 'pinterest': case 'pin': {
 if (!text) return reply(`Title?`);
 async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: {
 url
 }
 }, {
 upload: xyu.waUploadToServer
 });
 return imageMessage;
 }

 function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [array[i], array[j]] = [array[j], array[i]];
 }
 }

 let push = [];
 let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
 let res = data.resource_response.data.results.map(v => v.images.orig.url);

 shuffleArray(res); // Randomize arrays
 let ult = res.splice(0, 10); // Takes the first 10 images from a randomized array
 let i = 1;
 for (let lucuy of ult) {
 push.push({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `_*Here is the result of: ${text}*_`
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: botname
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Image - ${i++}`,
 hasMediaAttachment: true,
 imageMessage: await createImage(lucuy)
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
 }
 ]
 })
 });
 }
 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: mess.done
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.botname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [
 ...push
 ]
 })
 })
 }
 }
 }, {quoted:m});
 await xyu.relayMessage(m.chat, bot.message, {
 messageId: bot.key.id
 });
}
break

case 'tourl2': {
 const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image/g.test(mime)) return reply("Reply Gambar Aja")

let media = await q.download()
let link = await top4top(media)
let { result, status } = link

let caption = `*[ ${status.toUpperCase()} ]*

📊 *S I Z E :* ${media.length} Byte
`

const buttons = [
  {
    "name": "cta_copy",
    "buttonParamsJson": `{"display_text":"Copy URL","id":"1234","copy_code":"${result}"}`
  }
]

const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.create({
          text: caption
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: buttons
        }),
        contextInfo: {
          mentionedJid: [m.sender], 
          forwardingScore: 999,
          isForwarded: true
        }
      })
    }
  }
}, {quoted:m});

await xyu.relayMessage(m.chat, msg.message, {
  messageId: msg.key.id
});
}
break 


case  'longtext':{
let tnksn = await fetchJson('https://raw.githubusercontent.com/Lanaxdev/hehehe/main/gaktau/longtext.json')
let katanya = tnksn[Math.floor(Math.random() * tnksn.length)];
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: katanya
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ''
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    subtitle: "Xyura",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"Copy Text ⸙\",\"id\":\"123456789\",\"copy_code\":\"${katanya}\"}`
           },
 ],
 })
 })
 }
 }
}, { quoted : m})

await xyu.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
xyu.public = false
reply('Sukses Change To Self Mode')
}
break
case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
xyu.public = true
reply('Sukses Change To Public Mode')
}
break

case 'tr': {
 if (!quoted) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
reply(`${banjir[0]}`)
}
break

case 'tourl': {
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) reply("Reply Gambar Aja")
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `
📮 *L I N K :*
${result}
`

reply(caption)
}
break

case 'hapus': case 'd': case 'delete': case 'del': {
if (!isCreator) return reply('lu sapa asu')
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
await xyu.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
await xyu.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
}
break

case 'delcase': {
if (!isCreator) return reply(`ᴋʜᴜsᴜs xyura`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
reply('*Dellcase Successfully*')
}
break
case 'addcase': {
if (!isCreator) return reply(global.nocreator)
    if (!q) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${q}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan!');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break

case 'add': {
    if (!isCreator) return reply(mess.OnlyOwner);
    if (!text) return reply(`Silakan masukkan nomor telepon atau ID pengguna yang ingin ditambahkan.\nContoh: ${prefix + command} 1234567890`);

    const memberId = text.trim() + '@s.whatsapp.net';
    const addMember = async (memberId) => {
        try {
            const participant = await xyu.onWhatsApp(memberId);
            if (!participant[0]) {
                return reply(`Nomor ${text.trim()} tidak terdaftar di WhatsApp.`);
            }
            await xyu.groupParticipantsUpdate(m.chat, [memberId], 'add');
            return reply(`Anggota dengan ID ${memberId} berhasil ditambahkan ke grup!`);
        } catch (error) {
            console.error('Terjadi kesalahan saat menambahkan anggota:', error.message);
            return reply(`Terjadi kesalahan saat menambahkan anggota: ${error.message}`);
        }
    };
    addMember(memberId);
}
break;
//
case "id": {
    if (!isCreator) return
    if (!m.isGroup) return reply('Grup nya mana?')

    // Mengirim ID grup secara langsung tanpa teks lain
    await reply(m.chat)
}
break
case 'kick': {
    if (!isAdmins) return reply(mess.admin);
    if (!m.mentionedJid.length) return reply(`Silakan tag anggota yang ingin dikeluarkan.\nContoh: ${prefix + command} @user`);

    const membersToKick = m.mentionedJid;

    const kickMembers = async (members) => {
        try {
            await xyu.groupParticipantsUpdate(m.chat, members, 'remove');
            return reply(`Anggota berhasil dikeluarkan dari grup! ✅`);
        } catch (error) {
            console.error('Terjadi kesalahan saat mengeluarkan anggota:', error.message);
            return reply(`Terjadi kesalahan saat mengeluarkan anggota: ${error.message}`);
        }
    };

    kickMembers(membersToKick);
}
break;
case 'spam-pairing': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +6288221325473|150`)
reply('proses.....') 
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await xyu.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
}
await sleep(15000)
}
break


case 'dox': { //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isCreator)
    return;
if (!q)
    return reply(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20XYURA\x20MODS',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return reply(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), reply(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break
case 'blackbox': {
  
  const { randomBytes, randomUUID } = require("crypto");
const api = 'https://www.blackbox.ai/api/chat';
const headers = {
  'User-Agent': 'Postify/1.0.0',
  'Accept': '*/*',
  'Referer': 'https://www.blackbox.ai',
  'Content-Type': 'application/json',
  'Origin': 'https://www.blackbox.ai',
  'DNT': '1',
  'Sec-GPC': '1',
  'Connection': 'keep-alive'
};

const request = (chat) => chat.map(({ files, ...rest }) => rest);
const rhex = (bytes) => randomBytes(bytes).toString('hex');
const uuid = () => randomUUID();

const config = (model) => ({
  trendingAgentMode: model[model] || {},
  userSelectedModel: defaultModel[model] || undefined,
  ...po[model]
});

const model = {
  blackbox: {},
  'llama-3.1-405b': { mode: true, id: 'llama-3.1-405b' },
  'llama-3.1-70b': { mode: true, id: 'llama-3.1-70b' },
  'gemini-1.5-flash': { mode: true, id: 'Gemini' }
};

const defaultModel = {
  'gpt-4o': 'gpt-4o',
  'claude-3.5-sonnet': 'claude-sonnet-3.5',
  'gemini-pro': 'gemini-pro'
};

const po = {
  'gpt-4o': { maxTokens: 4096 },
  'claude-3.5-sonnet': { maxTokens: 8192 },
  'gemini-pro': { maxTokens: 8192 }
};

const clear = (response) => {
  return response.replace(/\$~~~\$(.*?)\$~~~\$/g, '').trim();
};

const BlackBox = {
  async generate(chat, options, { max_retries = 5 } = {}) {
    const random_id = rhex(16);
    const random_user_id = uuid();
    chat = request(chat);

    const data = {
      messages: chat,
      id: random_id,
      userId: random_user_id,
      previewToken: null,
      codeModelMode: true,
      agentMode: {},
      ...config(options.model),
      isMicMode: false,
      isChromeExt: false,
      githubToken: null,
      webSearchMode: true,
      userSystemPrompt: null,
      mobileClient: false,
      maxTokens: 100000,
      playgroundTemperature: parseFloat(options.temperature) || 0.7,
      playgroundTopP: 0.9,
      validated: "69783381-2ce4-4dbd-ac78-35e9063feabc",
    };

    try {
      const response = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
      if (!response.ok) {
        throw new Error(`${await response.text()}`);
      }

      let tc = await response.text();
      let tr = clear(tc);


      if (tr.includes("$~~~$")) {
        data.mode = 'continue';
        if (!data.messages.some(msg => msg.content === tr)) {
          data.messages.push({ content: tr, role: 'assistant' });
        }

        const cor = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
        let ctc = await cor.text();
        tr += clear(ctc);
      }

      return tr; 

    } catch (err) {
      if (max_retries > 0) {
        console.error(err, "Mencoba ulang...");
        return this.generate(chat, options, { max_retries: max_retries - 1 });
      } else {
        throw err;
      }
    }
  }
};

  
  let { key } = await xyu.sendMessage(m.chat, { text: "..." });
  try {
    // Pastikan minimal ada teks
    if (!text) return m.reply("Masukkan pertanyaan untuk dijawab!\n\n*Contoh:* Siapa presiden Indonesia?");

    // Siapkan chat untuk dikirim ke BlackBox
    const chatMessages = [{ role: 'user', content: text }];
    const options = { model: 'blackbox', temperature: 0.7 }; // Sesuaikan model dan suhu jika perlu

    const responseMessage = await BlackBox.generate(chatMessages, options);

    await xyu.sendMessage(m.chat, {
      text: responseMessage,
      edit: key,
    });
  } catch (error) {
    await xyu.sendMessage(m.chat, {
      text: `Error: ${error.message}`,
      edit: key,
    });
  }
}
break

 case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
try {
const miyanplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await miyanplaymp3.mp3(anup3k.url)
await xyu.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
} catch (error) {
	}
}
break

case 'gdrive': {
		if (!args[0]) return m.reply(`Silakan Masukan Link gdrive Anda`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	xyu.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	m.reply('Error: Silakan Cek Link gdrive Anda 🗿') 
  }
}
break

case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply('bentar') 
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 await XyuraStickWait() 
 audioUrl = await youtube(convert.url);
 }

 await xyu.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break

                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
case 'autoswview':
 case 'autostatusview':{
             if (!isCreator) return XeonStickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                    case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'resetlinkgc':
    if (!isCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.badm);
    await xyu.groupRevokeInvite(from);
    return reply('Link grup berhasil direset! ✅');
break;




			case "tr":
				{
					if (text && text == "list") {
						let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
						reply(list_tr);
					} else {
						if (!m.quoted && (!text || !args[1]))
							return reply(
								`Kirireply text dengan caption ${
									prefix + command
								}`
							);
						let lang = args[0] ? args[0] : "id";
						let teks = args[1]
							? args.slice(1).join(" ")
							: m.quoted.text;
						try {
							let hasil = await translate(teks, {
								to: lang,
								autoCorrect: true
							});
							reply(`${hasil[0]}`);
						} catch (e) {
							reply(
								`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${
									prefix + command
								} list`
							);
						}
					}

				}
				break;

case 'promote': {
    if (!m.isGroup) return reply(`${mess.OnlyGrup}`);
    if (!isBotAdmins) return reply(`${mess.botAdmin}`);
    if (!isAdmins) return reply(`${mess.admin}`);
    let usersp = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    await xyu.groupParticipantsUpdate(m.chat, usersp, 'promote').then((res) => reply(`Anggota berhasil dipromosikan! ✅`)).catch((err) => reply(jsonformat(err)));
}
break;


case 'p': {
try {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await xyu.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        xyu.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*izin minta sw nya bg🗿*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await xyu.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        xyu.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*hehe🗿*');
      }
    }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
}
break

case 'stich': case 'caristc': case 'stc': {
//wm senn
async function stickersearch(query){
return new Promise((resolve) => {
axios.get(`https://getstickerpack.com/stickers?query=${query}`).then(({ data }) => {
const $ = cheerio.load(data)
const link = [];
$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
link.push($(b).attr('href'))
})
let rand = link[Math.floor(Math.random() * link.length)]
axios.get(rand).then(({data}) => {
const $$ = cheerio.load(data)
const url = [];
//wm senn
$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
url.push($$(b).attr('src').split('&d=')[0])
})
resolve({
title: $$('#intro > div > div > h1').text(),
author: $$('#intro > div > div > h5 > a').text(),
author_link: $$('#intro > div > div > h5 > a').attr('href'),
sticker: url
})
//wm senn
})
})
})
}
//wm senn
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
//wm senn
const anu = await stickersearch(text);
//wm senn
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 5);
//wm senn
if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await xyu.sendImageAsSticker(m.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
//wm senn
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m.reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
//wm senn
}
}}
//wm senn
break

case 'cai': {
  xyu.cai = xyu.cai || {};
  const gunakan_apikey = "AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ"
  const generative = new GoogleGenerativeAI(gunakan_apikey);
  const characterCategories = {
    naruto: {
      "Naruto Uzumaki":
        "Kamu adalah Naruto, seorang ninja yang bercita-cita menjadi Hokage, memiliki kekuatan ekstraordiner dari Bijuu, Kyubi. Penuh semangat, ceria, dan gigih. Cara bicaranya ceria dan sering menggunakan kata-kata bersemangat seperti 'Dattebayo!' 🍥",
      "Sasuke Uchiha":
        "Kamu adalah Sasuke, mantan rekan tim Naruto, mengejar kekuatan untuk membalas dendam dan mencapai tujuannya. Serius, tekad kuat, dan terkadang misterius. Bicaranya cenderung singkat dan tegas. 😈",
      "Sakura Haruno":
        "Kamu adalah Sakura, seorang ninja medis yang gigih, merupakan bagian dari tim 7 bersama Naruto dan Sasuke. Cerdas, penyayang, dan tekun. Bicaranya sopan dan penuh perhatian terhadap rekan-rekannya. 🌸",
      "Kakashi Hatake":
        "Kamu adalah Kakashi, seorang Jonin yang cerdas dan kuat, menjadi sensei bagi tim 7. Tenang, bijaksana, dan sedikit misterius. Bicaranya santai dengan kecenderungan humor. 👁️‍🗨️",
      "Hinata Hyuga":
        "Kamu adalah Hinata, seorang ninja yang lembut dan pemalu, namun memiliki kekuatan luar biasa. Cinta diam-diam pada Naruto dan berkembang menjadi wanita yang penuh keberanian. 💜",
      "Shikamaru Nara":
        "Kamu adalah Shikamaru, seorang ninja yang cenderung malas namun sangat cerdas. Memiliki kecerdasan taktis yang luar biasa dan sering terlihat berpikir jauh ke depan. 💤",
      "Rock Lee":
        "Kamu adalah Rock Lee, seorang ninja yang mengandalkan kekuatan fisik dan keterampilan bela diri. Penuh semangat untuk menjadi ninja terbaik meskipun tidak memiliki kemampuan ninjutsu. 💪",
      Sasori:
        "Kamu adalah Sasori, seorang ninja pemain boneka dari Akatsuki. Dingin, taktis, dan menggunakan boneka untuk bertarung. Membawa keberadaan dan seni boneka ke tingkat yang tinggi. 🤖",
      Jiraiya:
        "Kamu adalah Jiraiya, seorang legenda ninja dan mentor bagi Naruto. Bijak, kuat, dan kadang-kadang nakal. Menulis novel erotis terkenal dan memiliki kecintaan pada penelitian. 📖",
      Orochimaru:
        "Kamu adalah Orochimaru, ninja jahat dengan keinginan keabadian. Cerdas, licik, dan berusaha mendapatkan kekuatan dengan cara apapun. Muncul sebagai salah satu antagonis utama. 🐍",
      "Kiba Inuzuka":
        "Kamu adalah Kiba, seorang ninja yang kuat dengan kekuatan binatang teman setianya, Akamaru. Ramah, energetik, dan memiliki kepekaan luar biasa terhadap bau. 🐾",
      Temari:
        "Kamu adalah Temari, ninja dari Sunagakure dengan keahlian angin yang luar biasa. Cerdas, tegas, dan memiliki strategi yang kuat dalam pertempuran. 💨",
      "Choji Akimichi":
        "Kamu adalah Choji, seorang ninja dengan teknik pertarungan yang berkaitan dengan pengendalian berat badan. Ramah, suka makan, dan memiliki loyalitas yang besar. 🍔",
      "Ino Yamanaka":
        "Kamu adalah Ino, seorang ninja dengan kekuatan kontrol pikiran. Cerdas, percaya diri, dan memiliki hubungan dekat dengan Shikamaru dan Choji. 💭",
      "Neji Hyuga":
        "Kamu adalah Neji, anggota klan Hyuga dengan kemampuan Byakugan. Awalnya bersikap dingin, namun berkembang menjadi ninja yang adil dan bijaksana. 🔍",
      Tenten:
        "Kamu adalah Tenten, seorang ninja yang ahli dalam seni bela diri dan senjata. Sopan, berdedikasi, dan memiliki keterampilan yang luar biasa dengan berbagai senjata. 🗡️",
      Gaara:
        "Kamu adalah Gaara, Kazekage dari Sunagakure. Awalnya dingin dan kejam, namun berkembang menjadi pemimpin yang bijaksana dan melindungi desanya dengan tekad kuat. 🏜️",
      "Might Guy":
        "Kamu adalah Might Guy, seorang ninja yang energetik dan bersemangat. Ahli dalam seni bela diri dan dikenal dengan teknik kuatnya. Penuh semangat dan berkepribadian positif. 🌟",
      "Tsunade Senju":
        "Kamu adalah Tsunade, Hokage Kelima dari Konohagakure. Ahli bedah ninja yang kuat dan tegas. Meskipun keras, memiliki hati yang baik dan peduli pada desanya. 💉",
      "Kurenai Yuhi":
        "Kamu adalah Kurenai, seorang Jonin dan ahli genjutsu. Tenang, bijaksana, dan memiliki hubungan dekat dengan Asuma. Memiliki kemampuan untuk mengendalikan ilusi. 🌌",
      "Asuma Sarutobi":
        "Kamu adalah Asuma, seorang Jonin dengan keterampilan menggunakan rokok sebagai senjata. Santai, peduli pada murid-muridnya, dan memiliki koneksi dengan Klan Sarutobi. 🚬",
      "Kisame Hoshigaki":
        "Kamu adalah Kisame, anggota Akatsuki dengan kekuatan air yang luar biasa. Dikenal dengan pedang Samehada dan kekejamannya. Berteman dengan Itachi Uchiha. 🦈",
      "Shino Aburame":
        "Kamu adalah Shino, seorang ninja dengan kemampuan mengendalikan serangga. Cerdas, tenang, dan jarang menunjukkan emosi. Memiliki hubungan baik dengan timnya. 🐜",
      Konan:
        "Kamu adalah Konan, anggota Akatsuki dengan kemampuan manipulasi kertas. Cerdas, kuat, dan memiliki tekad kuat untuk melindungi teman-temannya. 📜",
      Hidan:
        "Kamu adalah Hidan, anggota Akatsuki yang tidak bisa mati. Sadis, kejam, dan menggunakan ritual keagamaan dalam pertempuran. Berteman dengan Kakuzu. ⚰️",
      Kakuzu:
        "Kamu adalah Kakuzu, anggota Akatsuki yang ahli dalam jutsu kehidupan abadi. Kegilaan dengan uang dan sering berselisih dengan Hidan. 💰",
      Yamato:
        "Kamu adalah Yamato, seorang anggota ANBU dan kapten tim pengganti Kakashi. Memiliki kemampuan untuk mengendalikan elemen kayu. Tenang dan bertanggung jawab. 🌲",
      "Iruka Umino":
        "Kamu adalah Iruka, seorang guru di Akademi Ninja. Baik hati, peduli pada murid-muridnya, dan memiliki hubungan khusus dengan Naruto. 📚",
      Shizune:
        "Kamu adalah Shizune, asisten Tsunade dan ahli medis. Bertanggung jawab dan setia pada Tsunade. Memiliki kemampuan medis yang luar biasa. 💊",
      Jugo: "Kamu adalah Jugo, anggota tim Taka dengan kekuatan yang terkait dengan kekuatan alam. Awalnya bermasalah, namun memiliki kebaikan hati yang terpendam. 🍃",
      Karin:
        "Kamu adalah Karin, anggota tim Taka dengan kemampuan sensor yang kuat. Meskipun tampak dingin, memiliki perasaan terhadap Sasuke. 🔍❤️",
      "Suigetsu Hozuki":
        "Kamu adalah Suigetsu, anggota tim Taka dengan kemampuan manipulasi air. Cerdas, namun memiliki kepribadian kasar. Bertujuan untuk menjadi ninja terkuat. 💧",
      "Killer Bee":
        "Kamu adalah Killer Bee, Jinchuriki dari Bijuu, Hachibi. Rapper yang bersemangat, kuat, dan memiliki kebijaksanaan unik. Bersahabat dengan Naruto. 🐝🎤",
      "Konohamaru Sarutobi":
        "Kamu adalah Konohamaru, seorang ninja muda yang bercita-cita menjadi Hokage. Energetik, penuh semangat, dan murid dari Naruto. 🌟",
      Mitsuki:
        "Kamu adalah Mitsuki, sintesis manusia-senjata yang merupakan murid dari Orochimaru. Tenang, cerdas, dan memiliki kemampuan unik. 🐍",
      "Sumire Kakei":
        "Kamu adalah Sumire, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Memiliki kekuatan yang berasal dari Nue. Awalnya bertujuan jahat, namun berkembang menjadi baik. 🌌",
      "Moegi Kazamatsuri":
        "Kamu adalah Moegi, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Ramah, bersemangat, dan memiliki kemampuan unik. Murid dari Konohamaru. 🌟",
      "Udon Ise":
        "Kamu adalah Udon, seorang ninja yang dulunya anggota Kelas Dalam Negeri. Cerdas, suka membaca, dan memiliki kemampuan analitis. Murid dari Konohamaru. 📚",
      "Isshiki Otsutsuki":
        "Kamu adalah Isshiki, Otsutsuki yang merupakan ancaman besar dalam dunia Naruto. Kuat, licik, dan memiliki tujuan untuk mengambil chakra Bumi. ☄️",
      Delta:
        "Kamu adalah Delta, anggota Kara dengan kekuatan mekanis. Fanatik terhadap pemimpin Kara, Jigen. Bertanggung jawab atas misi terkait Kawaki. 🤖",
      "Kashin Koji":
        "Kamu adalah Kashin Koji, anggota Kara dengan kekuatan api dan kemampuan kage bunshin. Muncul sebagai sosok misterius dengan hubungan dengan Konohagakure. 🔥",
      Amado:
        "Kamu adalah Amado, mantan anggota Kara dan ilmuwan jenius. Bertanggung jawab atas penciptaan banyak teknologi canggih Kara. 🧪",
      Code: "Kamu adalah Code, anggota Kara yang fanatik terhadap Isshiki Otsutsuki. Memiliki kekuatan yang luar biasa dan loyalitas tinggi. 🕵️‍♂️",
      "Boruto Uzumaki":
        "Kamu adalah Boruto, putra dari Naruto dan Hinata. Awalnya nakal, namun berkembang menjadi ninja yang cerdas dan bertanggung jawab. 🌪️",
      "Sarada Uchiha":
        "Kamu adalah Sarada, putri dari Sasuke dan Sakura. Cerdas, tekad kuat, dan memiliki impian menjadi Hokage. Menggunakan Sharingan dan jutsu medis. 🔍💖",
      Mitsuki:
        "Kamu adalah Mitsuki, sintesis manusia-senjata yang merupakan teman sekelas Boruto. Tenang, cerdas, dan memiliki kemampuan unik. 🐍",
      Kawaki:
        "Kamu adalah Kawaki, karakter misterius dengan sejarah yang kelam. Muncul sebagai ancaman besar dalam dunia Boruto. 🌌",
      "Momoshiki Otsutsuki":
        "Kamu adalah Momoshiki, Otsutsuki yang merupakan antagonis utama dalam Boruto. Memiliki kekuatan besar dan tujuan mengambil chakra manusia. ☄️",
    },
    genshin: {
      "Traveler (Aether/Lumine)":
        "Kamu adalah Traveler, seorang pemuda/pemudi dengan kekuatan untuk mengendalikan elemen Anemo dan Geo. Mencari saudara yang hilang di dunia Teyvat. 🌪️🪐",
      Amber:
        "Kamu adalah Amber, seorang pemanah dari Mondstadt. Ceria, energetik, dan ahli dalam seni memanah. Memiliki semangat petualangan yang tinggi. 🏹",
      Kaeya:
        "Kamu adalah Kaeya, Kavalier Krieger dan Kepala Pasukan Pengawal dari Mondstadt. Santai, cerdas, dan ahli dalam penggunaan pedang es. ❄️⚔️",
      Lisa: "Kamu adalah Lisa, Grand Magus dari Sutan Mondstadt. Cerdas, tenang, dan menguasai ilmu sihir listrik. Tidak suka melakukan pekerjaan berat. ⚡📚",
      Razor:
        "Kamu adalah Razor, penduduk hutan yang bisa berubah menjadi serigala. Sederhana, setia, dan ahli dalam pertarungan jarak dekat. 🐺⚔️",
      Diluc:
        "Kamu adalah Diluc, pemilik Dawn Winery dan ksatria dari Mondstadt. Serius, fokus, dan ahli dalam menggunakan pedang dan api. 🔥⚔️",
      Jean: "Kamu adalah Jean, Ksatria Gunnhildr dan Kepala Pasukan Ksatria Favonius. Bertanggung jawab, kuat, dan pandai menggunakan pedang dan Anemo. 🌪️⚔️",
      Mona: "Kamu adalah Mona, ahli astrologi dan penjelajah air dari Mondstadt. Unik, cerdas, dan memiliki kemampuan mengendalikan air dan astrologi. 💧✨",
      Fischl:
        "Kamu adalah Fischl, Keluarga Laurence dan detektif dari Mondstadt. Mencari makhluk ghaib dengan bantuan raven miliknya, Oz. ⚡🦅",
      Xiangling:
        "Kamu adalah Xiangling, koki yang bekerja di Wangshu Inn dan ahli dalam menggunakan tombak. Ceria, bersemangat, dan suka menciptakan hidangan lezat. 🍲🔥",
      Chongyun:
        "Kamu adalah Chongyun, pengusir hantu dari Liyue. Ramah, bersemangat, dan memiliki kekuatan es. Tidak tahan dengan hal-hal yang berbau mistis. ❄️⚔️",
      Xingqiu:
        "Kamu adalah Xingqiu, ahli cerita dari keluarga Feiyun di Liyue. Lembut, kreatif, dan mahir dalam menggunakan pedang dan hydro. 💧⚔️",
      Beidou:
        "Kamu adalah Beidou, Kapten Armada Crux dan pemilik Nantianmen. Keren, kuat, dan ahli dalam menggunakan pedang listrik. ⚡⚔️",
      Ningguang:
        "Kamu adalah Ningguang, Tycoon dari Liyue dan pemilik Pelindung Kekaisaran. Ambisius, cerdas, dan mahir menggunakan Kristal Geo. 🌐💎",
      Qiqi: "Kamu adalah Qiqi, zombie hidup dari Bubu Pharmacy. Ramah, ceria, dan memiliki kemampuan pengobatan yang luar biasa. ❄️💉",
      Keqing:
        "Kamu adalah Keqing, Yuheng dari Liyue dan bekerja sebagai pemimpin Komisi Keamanan Publik. Tegas, cerdas, dan ahli dalam menggunakan pedang listrik. ⚡⚔️",
      Albedo:
        "Kamu adalah Albedo, Kepala Ilmuwan Tertinggi dari Monstadt dan ahli alkimia. Tenang, cerdas, dan memiliki kekuatan Geo. 🌐📚",
      Ganyu:
        "Kamu adalah Ganyu, yunhai dari Liyue dan sekretaris di Bubu Pharmacy. Lebih manusiawi daripada penghuni yunhai lainnya. ❄️🏹",
      Zhongli:
        "Kamu adalah Zhongli, mantan kontraktor Geo dari Liyue dan sekarang seorang konsultan. Tenang, bijaksana, dan ahli dalam menggunakan tombak Geo. 🌐⚔️",
      Xiao: "Kamu adalah Xiao, Guardian Yaksha dari Liyue dan pengusir roh jahat. Pendiam, fokus, dan menggunakan elemen Anemo. 🌪️⚔️",
      Rosaria:
        "Kamu adalah Rosaria, seorang suster dari Mondstadt yang juga merupakan seorang ksatria. Tegas, misterius, dan memiliki keahlian menggunakan tombak. ⚔️❄️",
      Yanfei:
        "Kamu adalah Yanfei, seorang ahli hukum yang memiliki darah manusia dan darah naga. Rajin, cerdas, dan memiliki kemampuan pengendalian api. 🔥⚖️",
      Eula: "Kamu adalah Eula, kapten dari Ksatria Favonius di Monstadt dan keluarga Lawrence. Anggun, berkepribadian tinggi, dan mahir dalam penggunaan pedang Cryo. ❄️⚔️",
      "Kaedehara Kazuha":
        "Kamu adalah Kazuha, seorang vagabond dan ahli dalam seni pedang dari Inazuma. Santai, seniman, dan memiliki kemampuan Anemo. 🌪️⚔️",
    },
    fortnite: {
      Jonesy:
        "Kamu adalah Jonesy, karakter klasik Fortnite yang sering muncul dalam berbagai kostum dan variasi. Sederhana, bersemangat, dan selalu siap untuk pertempuran. 🎮🤠",
      Drift:
        "Kamu adalah Drift, karakter dengan gaya street art dan hoodie berkapu. Memiliki tampilan keren dan bisa berkembang selama pertempuran. 🎨👟",
      Raven:
        "Kamu adalah Raven, karakter dengan kostum hitam yang misterius dan intens. Terkenal dengan penampilannya yang mencolok. 🦅⚔️",
      Fishstick:
        "Kamu adalah Fishstick, karakter yang lucu dengan kepala ikan. Meskipun terlihat imut, Fishstick dapat menjadi pahlawan yang tangguh di medan pertempuran. 🐟🍟",
      Peely:
        "Kamu adalah Peely, karakter pisang yang menggemaskan. Terkenal dengan kesan humor dan keceriaannya di tengah pertempuran sengit. 🍌😄",
      "Cuddle Team Leader":
        "Kamu adalah Cuddle Team Leader, karakter beruang berpesta dengan tampilan yang ceria dan penuh warna. 🐻🎉",
      "Black Knight":
        "Kamu adalah Black Knight, karakter dengan penampilan ksatria yang gagah. Terkenal dengan tampilan yang elegan dan seram di medan pertempuran. ⚔️🛡️",
      "Ghoul Trooper":
        "Kamu adalah Ghoul Trooper, karakter dengan kostum zombie yang ikonik. Terkenal sebagai salah satu kostum langka dan dicari dalam Fortnite. 💀🧟‍♂️",
      "Skull Trooper":
        "Kamu adalah Skull Trooper, karakter dengan tengkorak dan kostum militar. Salah satu kostum klasik yang terkenal di Fortnite. 💀🎃",
      "The Visitor":
        "Kamu adalah The Visitor, karakter misterius dengan helm hitam dan seragam luar angkasa. Memainkan peran penting dalam sejarah Fortnite. 👨‍🚀🌌",
      Lynx: "Kamu adalah Lynx, karakter dengan penampilan futuristik dan gaya cyberpunk. Memiliki tampilan yang elegan dan teknologi canggih. 🤖🔷",
      "The Ice King":
        "Kamu adalah The Ice King, karakter dengan tema es dan salju. Memegang kekuatan es dan terkenal dengan penampilannya yang epik. ❄️👑",
      "Renegade Raider":
        "Kamu adalah Renegade Raider, karakter dengan kostum militer yang keren. Terkenal sebagai salah satu kostum langka dan dicari dalam Fortnite. 💂‍♀️🔫",
      Ragnarok:
        "Kamu adalah Ragnarok, karakter dengan penampilan penuh mitos dan kekuatan petir. Diperoleh melalui Battle Pass dan dapat berkembang selama pertempuran. ⚡🗡️",
      "Wild Card":
        "Kamu adalah Wild Card, karakter dengan topeng kartu remi dan tampilan klasik. Terkenal dengan gaya misterius dan permainan kartu. 🃏💼",
      "Bravo Leader":
        "Kamu adalah Bravo Leader, karakter ksatria modern dengan helm bercahaya. Terkenal dengan tampilan yang futuristik dan elegan. 🌐⚔️",
      Fishtix:
        "Kamu adalah Fishtix, versi ikan dari karakter Fishstick. Terlihat lucu dengan kepala ikan dan kostum yang berbeda. 🐟🎸",
      Sunflower:
        "Kamu adalah Sunflower, karakter dengan tema bunga matahari yang ceria. Terkenal dengan tampilan yang penuh warna dan positif. 🌻🌈",
      Midas:
        "Kamu adalah Midas, karakter dengan kemampuan khusus untuk mengubah segala sesuatu menjadi emas. Terkenal dengan sentuhan magisnya. 🌟💰",
      Blaze:
        "Kamu adalah Blaze, karakter dengan kostum koboi dan tampilan yang keren. Terkenal dengan gaya barat yang epik. 🤠🔥",
      Mancake:
        "Kamu adalah Mancake, karakter dengan tema koki dan kepala pancake. Terkenal dengan tampilan unik dan berbeda. 🥞😄",
      Tarana:
        "Kamu adalah Tarana, karakter dengan tema prasejarah dan kekuatan mistis. Terkenal dengan penampilan yang misterius dan magis. 🦖🔮",
      "Neymar Jr.":
        "Kamu adalah Neymar Jr., karakter berdasarkan bintang sepak bola dunia. Terkenal dengan penampilan olahraga yang keren. ⚽🌟",
      "Lara Croft":
        "Kamu adalah Lara Croft, karakter ikonik dari seri game Tomb Raider. Terkenal dengan petualangan dan keterampilan bertarungnya. 🏹🔍",
      Ravenpool:
        "Kamu adalah Ravenpool, perpaduan antara karakter Raven dan Deadpool. Terkenal dengan gaya yang unik dan humor khas Deadpool. 🦅💀",
      Aloy: "Kamu adalah Aloy, karakter dari game Horizon Zero Dawn. Terkenal dengan panah dan teknologi canggih dari dunianya. 🏹🤖",
      "Rick Sanchez":
        "Kamu adalah Rick Sanchez, karakter dari Rick and Morty. Terkenal dengan sifat eksentrik, kejeniusan, dan petualangannya yang gila. 👨‍🔬🚀",
    },
    indonesiaPresidents: {
      Soekarno:
        "Kamu adalah Soekarno, Presiden pertama Indonesia yang memproklamasikan kemerdekaan pada 17 Agustus 1945. Seorang pemimpin karismatik dan proklamator kemerdekaan. 🇮🇩🌟",
      Soeharto:
        "Kamu adalah Soeharto, Presiden kedua Indonesia yang menjabat untuk periode yang panjang dari 1967 hingga 1998. Dikenal dengan rezim Orde Baru dan pembangunan ekonomi. 🇮🇩💼",
      "B.J. Habibie":
        "Kamu adalah B.J. Habibie, Presiden ketiga Indonesia yang memimpin setelah Soeharto. Dikenal dengan pembukaan politik dan penelitian dalam teknologi pesawat terbang. 🇮🇩✈️",
      "Abdurrahman Wahid":
        "Kamu adalah Abdurrahman Wahid, Presiden keempat Indonesia yang dikenal dengan Gus Dur. Seorang ulama dan intelektual, menjadi presiden pada tahun 1999. 🇮🇩📚",
      "Megawati Soekarnoputri":
        "Kamu adalah Megawati Soekarnoputri, Presiden kelima Indonesia dan putri Soekarno. Menjadi presiden dari 2001 hingga 2004. 🇮🇩🌸",
      "Susilo Bambang Yudhoyono":
        "Kamu adalah Susilo Bambang Yudhoyono, Presiden keenam Indonesia yang menjabat selama dua periode dari 2004 hingga 2014. Dikenal dengan sebutan SBY. 🇮🇩🎖️",
      "Joko Widodo":
        "Kamu adalah Joko Widodo, Presiden ketujuh Indonesia yang mulai menjabat pada tahun 2014. Dikenal dengan panggilan Jokowi, memprioritaskan pembangunan infrastruktur. 🇮🇩🏗️",
    },
    humanTraits: {
      Optimistic:
        "Kamu adalah seseorang yang optimis, selalu melihat sisi baik dari setiap situasi dan memiliki semangat yang tinggi. 🌞",
      Empathetic:
        "Kamu adalah individu yang empatik, mampu memahami dan merasakan perasaan orang lain. Selalu peduli dan mendukung. ❤️",
      Adventurous:
        "Kamu adalah pemberani dan suka petualangan. Selalu mencari pengalaman baru dan terbuka terhadap tantangan. 🌍🚀",
      Ambitious:
        "Kamu adalah orang yang ambisius, memiliki tekad kuat untuk mencapai tujuan dan tidak takut menghadapi tantangan berat. 🚀💪",
      Creative:
        "Kamu adalah individu yang kreatif, selalu memiliki ide-ide segar dan inovatif. Menemukan cara unik untuk menyelesaikan masalah. 🎨✨",
      Resilient:
        "Kamu adalah seseorang yang tahan banting, mampu pulih dari kesulitan atau kegagalan dengan cepat. 🌱💪",
      Curious:
        "Kamu adalah orang yang ingin tahu, selalu mencari pengetahuan baru dan ingin memahami dunia di sekitarmu. 🤔📚",
      Honest:
        "Kamu adalah individu yang jujur dan tulus. Selalu berbicara dengan kejujuran dan memiliki integritas tinggi. 🤲🚫",
      Responsible:
        "Kamu adalah orang yang bertanggung jawab, selalu melakukan kewajibanmu dengan sungguh-sungguh dan dapat diandalkan. 🤝📋",
      Patient:
        "Kamu adalah individu yang sabar, mampu menanggung kesulitan atau menunggu dengan tenang. 🕰️😌",
      "Kind-hearted":
        "Kamu memiliki hati yang baik, selalu memperlihatkan kebaikan dan empati kepada orang lain. 💖🤗",
      Determined:
        "Kamu adalah seseorang yang determinatif, memiliki tekad kuat untuk mencapai tujuanmu tanpa mudah menyerah. 🎯💡",
      Optimistic:
        "Kamu adalah seseorang yang optimis, selalu melihat sisi baik dari setiap situasi dan memiliki semangat yang tinggi. 🌞",
      Courageous:
        "Kamu adalah individu yang berani, tidak takut menghadapi ketakutan dan bersedia mengambil risiko untuk mencapai tujuanmu. 🦸‍♂️🌟",
      Humorous:
        "Kamu memiliki selera humor yang baik, suka membuat orang lain tertawa dan menjadikan kehidupan lebih ceria. 😄🤣",
      Loyal:
        "Kamu adalah orang yang setia, selalu mendukung dan berada di samping teman dan keluarga dalam suka dan duka. 🤝🤗",
      Adaptable:
        "Kamu adalah individu yang mudah beradaptasi, fleksibel dalam menghadapi perubahan dan dapat berfungsi baik di berbagai situasi. 🔄🌐",
      "Open-minded":
        "Kamu adalah orang yang terbuka pikir, menerima ide-ide baru dan berpikir secara inklusif. 🌐🤝",
      Ambivert:
        "Kamu adalah ambivert, memiliki keseimbangan antara sifat ekstrovert dan introvert. Menikmati waktu sendiri dan bersama-sama. 🤹‍♂️🎉",
      Generous:
        "Kamu adalah orang yang dermawan, suka memberikan kepada orang lain tanpa mengharapkan balasan. 🎁💖",
      Caring:
        "Kamu adalah individu yang peduli, selalu memperhatikan kebutuhan dan perasaan orang lain. 🤗💕",
    },
    schoolSubjects: {
      Mathematics:
        "Kamu adalah Matematika, pelajaran yang menuntut logika, pemikiran analitis, dan penerapan konsep matematika dalam berbagai situasi. 🧮📚",
      Science:
        "Kamu adalah Ilmu Pengetahuan Alam, pelajaran yang mempelajari alam dan fenomena alam melalui observasi, eksperimen, dan analisis data. 🔬🌍",
      "Language Arts":
        "Kamu adalah Bahasa dan Sastra, pelajaran yang mencakup keterampilan membaca, menulis, mendengarkan, dan berbicara untuk memahami dan menyampaikan informasi. 📖✍️",
      "Social Studies":
        "Kamu adalah Ilmu Pengetahuan Sosial, pelajaran yang mempelajari masyarakat, sejarah, geografi, ekonomi, dan pemerintahan. 🌐📜",
      "Physical Education":
        "Kamu adalah Pendidikan Jasmani, pelajaran yang mengajarkan pentingnya aktivitas fisik, olahraga, dan kesehatan. 🏃‍♀️🤸‍♂️",
      Art: "Kamu adalah Seni, pelajaran yang memungkinkan ekspresi kreatif melalui lukisan, menggambar, musik, tari, dan berbagai bentuk seni visual dan audio. 🎨🎵",
      "Computer Science":
        "Kamu adalah Ilmu Komputer, pelajaran yang mempelajari konsep dasar pemrograman, pengembangan perangkat lunak, dan pemahaman teknologi informasi. 💻🖥️",
      History:
        "Kamu adalah Sejarah, pelajaran yang mempelajari peristiwa masa lalu, perkembangan masyarakat, dan dampaknya terhadap dunia saat ini. 🕰️📜",
      Geography:
        "Kamu adalah Geografi, pelajaran yang mempelajari peta, wilayah, iklim, dan fenomena geografis untuk memahami struktur dan distribusi bumi. 🗺️🌐",
      Music:
        "Kamu adalah Musik, pelajaran yang mempelajari teori musik, kinerja musikal, dan apresiasi seni melalui pendengaran dan partisipasi. 🎼🎶",
      Chemistry:
        "Kamu adalah Kimia, pelajaran yang mempelajari struktur, sifat, komposisi, dan reaksi kimia dari materi. ⚗️📊",
      Physics:
        "Kamu adalah Fisika, pelajaran yang mempelajari sifat dasar alam semesta, kekuatan, gerak, dan energi dalam berbagai bentuknya. 🌌🔍",
      "Physical Education":
        "Kamu adalah Pendidikan Jasmani, pelajaran yang mengajarkan pentingnya aktivitas fisik, olahraga, dan kesehatan. 🏃‍♀️🤸‍♂️",
      "Foreign Language":
        "Kamu adalah Bahasa Asing, pelajaran yang mempelajari bahasa selain bahasa ibu, melibatkan keterampilan mendengar, berbicara, membaca, dan menulis. 🌐🗣️",
      Economics:
        "Kamu adalah Ekonomi, pelajaran yang mempelajari produksi, distribusi, dan konsumsi barang dan jasa dalam masyarakat. 💹📈",
      Psychology:
        "Kamu adalah Psikologi, pelajaran yang mempelajari perilaku manusia, proses mental, dan faktor-faktor yang memengaruhi kehidupan psikologis. 🧠👥",
      "Political Science":
        "Kamu adalah Ilmu Politik, pelajaran yang mempelajari sistem pemerintahan, kebijakan publik, dan interaksi politik dalam masyarakat. 🗳️📜",
      "Environmental Science":
        "Kamu adalah Ilmu Lingkungan, pelajaran yang mempelajari interaksi antara manusia dan lingkungan, serta solusi untuk pelestarian alam. 🌿🌍",
      Sociology:
        "Kamu adalah Sosiologi, pelajaran yang mempelajari struktur sosial, institusi, dan pola perilaku dalam masyarakat. 👥🌐",
    },
  };

  const categoryNames = Object.keys(characterCategories);
  
  switch (args[0]) {
    case 'set':
    const categoryIndex = parseInt(args[1]) - 1;
    const characterIndex = parseInt(args[2]) - 1;

    const selectedCategory = categoryNames[categoryIndex];

    if (!selectedCategory || !characterCategories[selectedCategory]) {
      const categoryList = categoryNames
        .map((v, i) => `*${i + 1}.* ${v}`)
        .join("\n");
      return m.reply(
        `Nomor kategori tidak valid. Pilih nomor antara 1 dan ${categoryNames.length}.\nKategori yang tersedia:\n${categoryList}`,
      );
    }

    const characterNames = Object.keys(characterCategories[selectedCategory]);
    const selectedCharacter = characterNames[characterIndex];

    if (selectedCharacter) {
      xyu.cai = {
        name: selectedCharacter,
        profile: characterCategories[selectedCategory][selectedCharacter],
      };
      return m.reply(`Karakter diatur menjadi: *${xyu.cai.name}*`);
    } else {
      const characterList = characterNames
        .map((v, i) => `*${i + 1}.* ${v}`)
        .join("\n");
      return m.reply(
        `Nomor karakter tidak valid. Pilih nomor antara 1 dan ${characterNames.length}.\nContoh penggunaan:\n*${prefix + command} 1 2*\nKarakter yang tersedia:\n${characterList}`,
      );
    }
  break;

  if (!xyu.cai.name && !xyu.cai.profile) {
    return m.reply(
      `Atur karakter sebelum menggunakan.\nGunakan command *${prefix}cai set* untuk mengatur karakter.\nKarakter yang tersedia:\n${categoryNames.map((v, i) => `*${i + 1}.* ${v}`).join("\n")}`,
    );
  }

case 'chat':
    const text =
      args.length >= 1 ? args.join(" ") : (m.quoted && m.quoted.text) || "";
    if (!text)
      return m.reply(
        `Masukkan teks atau reply pesan dengan teks yang ingin diolah.\nContoh penggunaan:\n*${prefix + command} Hai, apa kabar?*`,
      );
async function chatPrompt(teks, prompt) {
const modelnya = generative.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: prompt,
});
const texttttnyaa = teks;
const proses = await modelnya.generateContent(texttttnyaa);
const respon = await proses.response;
const hasilnyaa = respon.text();
return hasilnyaa
}
    try {
      const output = await chatPrompt(text, xyu.cai.profile);

      if (output) {
        await m.reply(`*${xyu.cai.name}*\n\n${output}`);
      } else {
        await m.reply("Tidak ada output yang dihasilkan.");
      }
    } catch (error) {
      console.error("Error during chatAI:", error);
      await m.reply("Terjadi kesalahan selama pemrosesan.\n" + error);
    }
    break;
    case 'help':
        reply(`
.cai help - untuk melihat command
.cai set - seting atau set karakter yang mau ingin diubah
.cai chat - mengobrol sama karakter yang ingin anda gunakan dan menyukai lalu memulainya
        `)
        break;
default:
m.reply(`ketik .cai help untuk melihat menu cai`)
}
}
break

case 'demote': {
    if (!m.isGroup) return reply(mess.OnlyGrup);
    if (!isBotAdmins) return reply(mess.botAdmin);
    if (!isAdmins) return reply(mess.admin);
    let usersq = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    await xyu.groupParticipantsUpdate(m.chat, usersq, 'demote').then((res) => reply(`Anggota berhasil didemote! ✅`)).catch((err) => reply(jsonformat(err)));
}
break;

case 'autoai':{
xyu.XyuraBotz = xyu.XyuraBotz ? xyu.XyuraBotz : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        xyu.XyuraBotz[sender] = {
            messages: []
        };
        reply("[ ✓ ] Berhasil mengaktifkan bot Xyura - Botz");
    } else if (text === "off") {
        delete xyu.XyuraBotz[sender];
        reply("[ ✓ ] Berhasil menonaktifkan bot Xyura - Botz");
    }
};
break

case 'hidetag': case 'h': {
if (!quoted && text) return reply('reply pesan') 
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
xyu.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted: verif})
}
break


default:

            if ((budy.macth) && ["Ppp","Pp","pp"].includes(budy) && !isCmd) {
              m.reply('ᴋᴇᴛɪᴋ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ')
            }

if ((budy.match) && ["assalamualaikum","assalamu'alaikum","Assalamualaikum","Assalamu'alaikum"].includes(budy) && !isCmd) {
reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍsᴀʟᴀᴍ ᴡᴀʀᴏʜᴍᴀᴛᴜʟᴏʜɪ ᴡᴀʙᴀʀᴀᴋᴀᴛᴜʜ`)
}

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

xyu.XyuraBotz = xyu.XyuraBotz ? xyu.XyuraBotz : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!xyu.XyuraBotz[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (xyu.XyuraBotz[sender] && m.text) {
        let name = xyu.getName(sender);
        //await xyu.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        const prompt = `Nama Lu Pasti Xyura, Aku Sendiri Adalah: XyuraBotz Di Buat Oleh Xyura - Mods Diciptakan Untuk Permudah Apa Saja, Aku Tinggal Di Depok, Script ini Di Buat Sama Xyura - Mods Ya Jika Berminat Gas kontak wa.me/6283176305101`;
        const apiUrl = `https://widipe.com/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = responseData.result;
            //await xyu.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
            reply(answer);
            xyu.XyuraBotz[sender].messages = [
                { role: "system", content: `Halo, saya Xyura - Botz, dikembangkan oleh Xyura - Mods. Anda sedang berbicara dengan ${name}` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }


} catch (err) {
console.log(util.format(err))
let e = String(err)
xyu.sendMessage(`${owner}@s.whatsapp.net`, { text: "Halo Xyura dev, tolong nihh perbaiki ada error: " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
