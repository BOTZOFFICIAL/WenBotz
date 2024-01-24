/*

  WARNING APIKEY UTAMA ADALAH APIKEY

   https://api.botcahx.eu.org
   https://api.betabotz.org
   
   Web apikey diatas adalah web utama

*/

// Umum
global.owner = ['6283833582904']  
global.mods = ['6283833582904'] 
global.prems = ['6283833582904']
global.nameowner = 'Wen'
global.numberowner = '6283833582904' 

// Social
global.mail = 'alhatifquzwaen180428@gmail.com' 
global.gc = 'https://chat.whatsapp.com/GN475mNniisGfKkgNX1W3i'
global.instagram = 'https://instagram.com/wen_story1804'

// Sticker
global.wm = '© Wen'
global.wait = '*⫹⫺* _*Tunggu sedang di proses...*_'
global.eror = '*⫹⫺* _*Server Error*_'
global.stiker_wait = '*⫹⫺* _*Stiker sedang dibuat...*_'
global.packname = 'Bot By'
global.author = 'WenBotz'
global.maxwarn = '2' // Peringatan maksimum

//Panel
global.domain = 'https://xxxxx' //domain
global.capikey = 'pltc_xxxxx' //pltc
global.apikey = 'plta_xxxxx' //plta

// APIKEY
global.lolkey = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
global.xkey = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
global.xzn = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
global.xyro = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
global.btc = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
global.lann = 'APIKEY_KAMU' // Ambil apikey kalian di web api nya

global.APIs = {   
  nrtm: 'https://nurutomo.herokuapp.com', // Ini web apikey nya ambil sendiri 
  lol: 'https://api.lolhuman.xyz', // Ini web apikey nya ambil sendiri 
  xzn: 'https://skizo.tech', // Ini web apikey nya ambil sendiri 
  xyro: 'https://api.xyroinee.xyz', // Ini web apikey nya ambil sendiri 
  can: 'https://pnggilajacn.my.id', // Ini web apikey nya ambil sendiri 
  skizo: 'https://xzn.wtf', // Ini web apikey nya ambil sendiri 
  btc: 'https://api.botcahx.eu.org', // Ini web apikey nya ambil sendiri 
  lann: 'https://api.betabotz.org' // Ini web apikey nya ambil sendiri 
}
global.APIKeys = { 
  'https://api.lolhuman.xyz': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://skizo.tech': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://api.xyroinee.xyz': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://pnggilajacn.my.id': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://xzn.wtf': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://api.botcahx.eu.org': 'APIKEY_KAMU', // Ambil apikey kalian di web api nya
  'https://api.betabotz.org': 'APIKEY_KAMU' // Ambil apikey kalian di web api nya
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
