const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_07_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieW1pdTNsZUErT3M2Ym51TFRKemwyK2M0THBNQWI5R1NyVWdpKzVZSHdoOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTUzMjYyNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBNTQzNTc4QkQ3NEMyRDE5RTk0MjM0NDc1QjdCNkE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzkyNDg2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxOVQ0eEwtOVMwcTVmeVV4bXJlWjlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1NzQwMWQ2LTBlMWMtNDk5YS05ODk2LTM5OGQwZWQ3MGMxOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxNzcsXG4gICAgICAyNDEsXG4gICAgICAxMTUsXG4gICAgICAxNjgsXG4gICAgICAyMzYsXG4gICAgICAxOTIsXG4gICAgICAyMTIsXG4gICAgICAxMDAsXG4gICAgICAxMjQsXG4gICAgICAxNjksXG4gICAgICAxODYsXG4gICAgICA2NCxcbiAgICAgIDIxLFxuICAgICAgMTA3LFxuICAgICAgMzgsXG4gICAgICAyMDksXG4gICAgICAxNzAsXG4gICAgICAxMTAsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxNDYsXG4gICAgICAxNTQsXG4gICAgICAzMyxcbiAgICAgIDIwNixcbiAgICAgIDE2MSxcbiAgICAgIDE5NyxcbiAgICAgIDIxOCxcbiAgICAgIDExNSxcbiAgICAgIDE1NSxcbiAgICAgIDEyMCxcbiAgICAgIDIwMSxcbiAgICAgIDczLFxuICAgICAgMTE3LFxuICAgICAgMjI4LFxuICAgICAgMTc0LFxuICAgICAgMTM1LFxuICAgICAgMTg1LFxuICAgICAgMjQwLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdSNVA5SFZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTUzMjYyNTQ6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjU1MTM1NDQwOTE1Njo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKckx0T0lGRVBxVStMY0dHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJxME1EWHBhYXlWZXJjSHlDTG43UCtBajRSQkhCWi9OcWxlZWxlelA2Zzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVhmbEtwSHJsV3dlWW1XbzhDMitNVlFzcmNyZnczK05qVlFCcVZ3a0xNRWdNQlkwb01NZk4xamJmSzRlS2JJS0tpQllieUlRQmNiemRTMWo1S3VUQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjZJTVV5MlBFeVIxRzQ2ejNya3hSOUtSWXRKMVdTOUhYRWlwTCtWaDB6QVBlTVc0WEJURWZpcFVtNlU0Z1pDeFNMWGVZN1RRYWlXcXZEWFRIRUJ2QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDE1MzI2MjU0OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzkyNDg2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxxU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOTBmOWJSZExkWE12ZE5yb3JWay9oa3Njays3Yy9pdk14NVpTVnRNY21NZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTQ4NTU5NzcwLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
