const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923135058517"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'theycallmeprofessormirza@gmail.com'
global.github = 'https://github.com/theycallmeprofessor/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/themirzaofficial/' // add your username
global.sudo = process.env.SUDO || '923135058517' 
global.devs = '923135058517';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dnVUZET0NMdUZjeFRYbTZ4UDFwbEhwS21uUk50RitIY0kwNlFwTHBsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmsxUGVyZG1kdFE3MG9xZ0dLclRYMG9hU0R1M0s0a1lsakVDaDNYWjhBdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTzNJWVllUVg1TVh4M2ptSExaUVpLa3VqWUpEc1JUWW9lbDJQSjlzVkVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZnJ2ZmYrdHNYcXpIM29ZeHgwV0tzTVd5enZ6VDNuQWZkS21renIxUFJzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHeEVzbktOdm5tcUVSTTk0c2xDZmxqQlc2d3ZWd29IZmw5eUN2bk5URmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNkTFZybDBHV1dVOG9GQW80UStXaU4zMmlNZ2NDdWxPbGd6aDBUWCtXVVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Y21IWWR0ZmdnbG5SYVdtQ1duTDRXeGcwaGkySGh5WmhtZG0wcklxZnJJSGdSN0hIMjVkcnBOajFiaWlpWXA4WGEzeWZlYmhHL1RFV21pUDJKUmFnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4OCwiYWR2U2VjcmV0S2V5IjoiMVpSUzF0dEdSazZ1dXZpQ2ppdEFOZkxTNmRzMTJvNlRweTJYMnJrVWxOVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT192RzcxUDBUSGFfQWlkU2NTRUpNUSIsInBob25lSWQiOiI5NTIxODZiNy00NTA5LTQzZmEtYjUxZC0xZWE1YWZiOThmZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pNZjdqZVVaMURxM1huUWdqRE5MSkhkaWZjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0d3dXWFozL2xwVDJyM0ppWDNrbU1KK3RqSDg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTEozMGNReFBYOXVBWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjNHh1QVF0d0dCSExLZVZTYUFCNmhweDlvTERQeHh4V2grM1p4TzBxNlRRPSIsImFjY291bnRTaWduYXR1cmUiOiJBSnU5MGxNU0ZhNVR2blBjNXRZOU9oSkx1dkg1R0t3Snd5aXMvT3pqemR3ODk4a2JQZW9EOGJVMHV3N3d5b1BkNVZyMlZVWW1oZG5LZkhleTNDL09BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWEtFd24wS1hlalMyZy9mNExia1Yrd3FuVXpLMzRDTnllS3UzUFIwNzFNMkx5VThPUk9UcGdCaVE3U2pCaGwrRG4vTzRzL0RmeW54RVAyekZsL1NqZ0E9PSJ9LCJtZSI6eyJpZCI6IjkyMzEzNTA1ODUxNzoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNaXJaYSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzUwNTg1MTc6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWE9NYmdFTGNCZ1J5eW5sVW1nQWVvYWNmYUN3ejhjY1ZvZnQyY1R0S3VrMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDExNjI5Nn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'MIRZA',
  packname:  process.env.PACK_NAME || 'MIRZA',
   
  botname:   process.env.BOT_NAME === undefined ? "MirZ" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MirZaofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
