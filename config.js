const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923124533358")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://maliksahab:maliksahab@cluster0.pkr0dsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'malik-md.db' // add your username
global.sudo = process.env.SUDO || '923124533358'
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JVTDR0c2tWdDhQNUtDMURyMFovNlpONm1FeEo5RXBURFhhekRGdHFFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1hqMjZlY1AwWHBSMlRpWjNEbzVpZnpBc0hrdEtOWWl1RGZlV3gxanJGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSDk0ZzhqbXBuN0laZEt6N25nS3RFMy8wMEZDTjdzSktYT2xWR0Qwa25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZVlveWs0MEZ3V3hqWEZhMVZ2dHVWWEkvM09BMWFLSndSUEVQMmVXOEIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNSUxBRU55d2lqV2krUjVSbksxOFhYV0Jvc3RUdmVjVlJTVEUySzZtWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9DQzZKdDRhSUM2NmM1WE1xMlNIM2RVQmVFeThoUzVoa3ppUjNjWVYwd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0s5THlXUEpTRHIxUlpBcmc3aVA3UEZGcE11TkI0QlNMUmFnczZPK0pFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXRjRkFYYmJvZzZweTNBTG5IQmFVN3NUN2tQMHMySHU3T2Y3NFhFZEtITT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZd1RrcmIwK1R2Vm9ncVplclA0bDdrZThMTFJMNENVemc0cW9UdWFDR3Nkd2xYSVBlY3JvdDY3TU42dURyQ2oyVkMzcXVFVFVWdHlLcVJHUjlsdkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJ0TUVQYm5NZ1kwZUZRL2hXTHFtbVpqcU9PVHJmMDRKZi8rdWFKMStraklBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNDUzMzM1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNkI0RkRGQzE4QjM2QkVENEFCQjNCMEE1NzVFQjAzRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4NzgwMjI5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrZEQzcDNzUFJFbVUxSUZtQUpnU1lBIiwicGhvbmVJZCI6IjM0OGZlYjZmLTAyMjMtNGUwNC1iY2YwLTk4ODM5NjAzYWI4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUzZvMk1TeHRPOTFmQXI1RExaRnhPTEtjRXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDNEWTY1TjVVTHViZzRGcDFXNlg0MW1UaHJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5BTFAxTkdUIiwibWUiOnsiaWQiOiI5MjMxMjQ1MzMzNTg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6aL4oOf4bSgzaXJqs2j4bSYzavinK7ig53wn4ey4Zep44GX4Y+G4Y+mIPCfh7jOsdC9zrHQsvCdhJ/ig50ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0llcW83RURFTFNDeXJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlLQTB6Y25Da3ZKRHQ3MnJYMHV2bE9NV3VTeXl4UEhURm03S2JBZktJME09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlkycGNtczBSVldoNmw5YzBsK0o2dDdyRUlrZXNDY2JrVGxkeU9yU0xzcjRualVYcldGTEFrSit3RU9iNnYvT1o4cyt5VjQ5WVI1dEF4YWN3RWZYTkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzTTRUd2l3L2Rha2pvZFRRbmFUMkdkUm8xSnR0TjFvVDFpRXdNUWJidGM1b3FKb3J2ZUVyOGhWdVdOcFFJUXZ3MUhGMmswUUkvem9LR2UrM2FpLzRCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEyNDUzMzM1ODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNpZ05NM0p3cEx5UTdlOXExOUxyNVRqRnJrc3NzVHgweFp1eW13SHlpTkQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg3ODAyMjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTW5qIn0=",
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
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
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
