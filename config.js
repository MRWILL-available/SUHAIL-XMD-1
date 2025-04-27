const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_17_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGtIYURGekR6MWt2L09MSjNodkN4NEhTc2FlQ3pmL0gzWE96SzNQNVRGMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhDQkRFNTE2QTFDM0UyQTQyNUZDRDY0OTRFODU1NjdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTcxMzAzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDNFMDU2OTlBNThEMTNEMDk3QzZEOEQxQzJFNUZFNzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ1NzEzMDMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInMwRzJzNHNvU05lUzA3MUxrblM2bGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGU3YzY0YWMtZTEzNS00YzU4LWE5OTEtZjI5MDllNzVkNTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDIyMyxcbiAgICAgIDIxNyxcbiAgICAgIDc5LFxuICAgICAgMTgwLFxuICAgICAgMTg4LFxuICAgICAgOTcsXG4gICAgICAyNyxcbiAgICAgIDEwOCxcbiAgICAgIDExLFxuICAgICAgMTIyLFxuICAgICAgMTQwLFxuICAgICAgNjcsXG4gICAgICAxNjIsXG4gICAgICAxMTMsXG4gICAgICA2MSxcbiAgICAgIDI0MixcbiAgICAgIDEzNixcbiAgICAgIDE2MixcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyNTIsXG4gICAgICA1MSxcbiAgICAgIDYwLFxuICAgICAgMTMsXG4gICAgICA1MyxcbiAgICAgIDg2LFxuICAgICAgMTU5LFxuICAgICAgMjUxLFxuICAgICAgMTg5LFxuICAgICAgMTEyLFxuICAgICAgMzIsXG4gICAgICAxNDYsXG4gICAgICA5LFxuICAgICAgMjIsXG4gICAgICAxOTgsXG4gICAgICAxNzUsXG4gICAgICAyMzQsXG4gICAgICAyMDcsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWVEpXOUNaM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ3OTIzNTI1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDcxNTkzMDg1ODcxNTY6NjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+HsiDwn4e3IPCfh7wg8J+HriDwn4exIPCfh7FcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMkw5WklCRVA3dXRjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1JTDlkUUVJd3BUWFJZZCtRcHR2SVJ1QXdDMC9rNWhWQm9ONGp6TUo3am89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3FrQks1N3pvYWVXZUgxclZLNm1iVEdlMjRuN3BrdjRmUDdVczJ4NThOcXNNTWFDaGVoOWIyVTRCM3RSSmxkckR1MVYwdkx2NGNOY01XU3V6NUc2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidjE4NEpiYXhZelhEWVYwdE5zajAzdHhMT3hPZUhHandONVIzMnJZQTJXY0lLVUZoNk9FL1Q4NS85WFMrditrUjEzRW14c0ZBbXJTUWlNRzR0cG9kaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ3OTIzNTI1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTcxMzAyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpWd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlZ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwienRIbTNTU0kvR1N5bmtRQjR2anFtay9vR1hYWWZNaFZtK2ozcGRobWNaMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDgxMDI2MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTcxMzAyODk1N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
