const fs = require('fs-extra')

if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: __dirname + '/config.env' })
}

//═══════[Required Variables]════════\\

global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split("923322964709,") : ["923310195292"]
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://maliktiktokuk292:XJ8rNpcY60XR8mwX@cluster0.hbq8avd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port = parseInt(process.env.PORT) || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'malik-md.db' // add your username
global.sudo = process.env.SUDO ? parseInt(process.env.SUDO) : 923310195292
global.devs = '923124533358'
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'

module.exports = {
  sessionName: process.env.SESSION_ID || "",
  botname: process.env.BOT_NAME || 'MALIK-BOT',
  ownername: process.env.OWNER_NAME || 'arkhan',
  author: process.env.PACK_INFO ? process.env.PACK_INFO.split(";")[0] : 'bot',
  auto_read_status: process.env.AUTO_READ_STATUS === "true",
  packname: process.env.PACK_INFO ? process.env.PACK_INFO.split(";")[1] : 'malik-Md',
  autoreaction: process.env.AUTO_REACTION === "true",
  antibadword: process.env.ANTI_BAD_WORD || 'nigga',
  alwaysonline: process.env.ALWAYS_ONLINE === "true",
  typingprensence: process.env.TYPING === "true",
  recordingpresence: process.env.RECORDING === "true",
  antifake: process.env.FAKE_COUNTRY_CODE || '971',
  readmessage: process.env.READ_MESSAGE === "true",
  auto_status_saver: process.env.AUTO_STATUS_SAVER === "true",
  HANDLERS: process.env.PREFIX || '#',
  warncount: parseInt(process.env.WARN_COUNT) || 3,
  disablepm: process.env.DISABLE_PM === "true",
  levelupmessage: process.env.LEVEL_UP_MESSAGE !== "false",
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  afk: process.env.AFK !== "false",
  autobio: process.env.AUTO_BIO || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY !== "false",
  heroku: process.env.HEROKU !== "false",
  HEROKU: {
    HEROKU: process.env.HEROKU !== "false",
    API_KEY: process.env.HEROKU_API_KEY || '',
    APP_NAME: process.env.HEROKU_APP_NAME || ''
  },
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'MALIK',
  WORKTYPE: process.env.WORKTYPE || 'private'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  console
