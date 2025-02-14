import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  [59896753932', 'FG', true],
  ['59896753932']
] //Numeros de owner 

global.mods = [''] 
global.prems = [59896753932', 59896753932']
global.botNumber = [59896753932'] 
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvzn' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = "lobo-bot' 
global.author = '@fg98' 

//--info FG
global.botName = 'lobo-bot'
global.fgig = 'https://instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-bot' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '' //-ID de canal de WhatsApp
global.fgcanal = ''
global.bgp = ''
global.bgp2 = ''
global.bgp3 = '' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
gracias por utilizar nuestro lobo bot
