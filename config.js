const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923124533358")
global.mongodb = process.env.MONGODB_URI || "  mongodb+srv://maliksahab:maliksahab@cluster0.pkr0dsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'malik-md.db' // add your username
global.sudo = process.env.SUDO || 923310195292
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNCMm1YdmVIUWpuOXU2V1djWHp0cDR4bXVBMmxZQjdJOENiU0hoeFJGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUltaWpmN0xXSVNZODFYZDZWVXlxVlVScHZOVnoxVVdQN3gwektxaXhEWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR3R4QlR0ckFRM2VLaC9aMjhBQkM4TDBpbTV5a1k4R1kzZmR4c1RwY2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6andEWWJ0OVdDTHl6QjAyd2cvOHZjREE5Q1RkYTNsRmJDNEpseWlPdDJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFSG85b2JWa3NYR3QyMGNvNGVyRGV6WldKWGJLbGVtUytCUFJqaXJwRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklnam5OS1VmeWV5RytOVzBzMGxjV05PbG1paDlPQXBjNTk1SkxlWTF2QWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdsSEQ3YWNFdTVMdGhSU1ZaU0IwRWYvN0RKWnlPRWEwRnhuWWFIYzNHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FZYy9ZZUlsL3ozK0k5YmlJT2FVTGsrSDEycVNqMFI4eXN1aGNaT0J4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik01N1lNZjc3L0poOXlwSlBZSWROVlhoZDFwTjVTaXY5T0FxV2NSUDk1ZzN1UThVbVdVdGY5YTcwTHMvY1lLUzhRZWh2RHMzcmc5cmpySjJRbUxGMWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoidUpKVmNYaXF1NjFDZWFuWkF0UUJxY3YvdHh6WnFML2M0SSt0U3FabVFCWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjQ1MzMzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUU3RkQyMjI3MkVGMDBBMzE3NzBBNDhDQTgwMzQwQ0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTYzNjI0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTI0NTMzMzU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExMDYxMzRFNzJEMjMxQzBDQkI0MDUyQUVENDNBMUVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE2MzYyNDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBwMUktdlYtUnFhRWJFTW9NNmJtcmciLCJwaG9uZUlkIjoiM2IyMmI3NGEtOTAyNC00NTNiLWE0NmUtMTdjNTU4NzQ4ZjM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBhcWpWQ1l1SUxvM0NYOGp0NkNmQ2dIbnBuMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhb3JTKzVPMk0wSGZlbHpHckNGcUs3VEE2Q0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1ExWlhaR0YiLCJtZSI6eyJpZCI6IjkyMzEyNDUzMzM1ODo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfpovig5/htKDNpcmqzaPhtJjNq+KcruKDnfCfh7Lhl6njgZfhj4bhj6Yg8J+HuM6x0L3OsdCy8J2En+KDnSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWVxbzdFREVJU3IrTFFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieUtBMHpjbkNrdkpEdDcyclgwdXZsT01XdVN5eXhQSFRGbTdLYkFmS0kwTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiemJLTmlXOCtGWDNXeXp3NCtEcGQ4WXNGeEJZVW5mQ2gzMStGZ0RqTVFzT0hKd2h6NGpxQzVUN3o4a21RV2c3RjFvaFhLMDFRNmJVRHd0LzJQNGpUQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InNOM2FRTU9BRldHejZXK3ZVWEdtSkJTL21hektiZnBWMXpjRysxRXI4ZEt1YjhDcHJGb2M2NzQvVnh5WEVHQkxzUm51c2IvK3JFRHJ6MlVqMEN0dWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTI0NTMzMzU4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2lnTk0zSndwTHlRN2U5cTE5THI1VGpGcmtzc3NUeDB4WnV5bXdIeWlORCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTYzNjI0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNbmoifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'MALIK-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'arkhan' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '#' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
