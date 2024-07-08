const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2JCcERRcXNPbFJYcXp6STFIMkp5VDlacWx1THRONHVxc0VJMGsxREpNZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNzg1MTEyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5MDdGNEExRjQ2NThEMTUzM0JGRjEzQzkzQzAyMzcyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ2NjIxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1NVJfdkt4eVNPS2gtZUpjOVFvZ3l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQzYWI0NDFhLTI4NjQtNDNkMy05YWNkLTJkMmExNGUxN2ZmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAyNDMsXG4gICAgICA1OCxcbiAgICAgIDE1LFxuICAgICAgMTUxLFxuICAgICAgMjA5LFxuICAgICAgNzksXG4gICAgICAyMSxcbiAgICAgIDEwNyxcbiAgICAgIDkzLFxuICAgICAgNCxcbiAgICAgIDIyOSxcbiAgICAgIDE5NSxcbiAgICAgIDY0LFxuICAgICAgMjUyLFxuICAgICAgMTg4LFxuICAgICAgMTE2LFxuICAgICAgMjQ2LFxuICAgICAgNixcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAzNyxcbiAgICAgIDEzMSxcbiAgICAgIDE5MSxcbiAgICAgIDE3MixcbiAgICAgIDIyOSxcbiAgICAgIDE2OSxcbiAgICAgIDkyLFxuICAgICAgMTI0LFxuICAgICAgMzgsXG4gICAgICAyMzUsXG4gICAgICAyMDMsXG4gICAgICAyMjUsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICA4NSxcbiAgICAgIDIxOSxcbiAgICAgIDEsXG4gICAgICAzNyxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhHMjFEQjY4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzg1MTEyMTA6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCY8J2QjvCdkJQt8J2Qh/CdkIDwnZCMXCIsXG4gICAgXCJsaWRcIjogXCIxMzI2ODkwNzE5ODA2ODg6OTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lucnNFR0VKMzJzTFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUelU0eldSMDNySDF6d2p6L3NxWEtCenhnMTlKZzhFcUlvcUIxKzNqcTI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInR0MGxaaExOWkxQRks1TzYyVHlwVWc4ZnpidjJQeXh3WGg1azhDRUJLYngwL3AvMytOWmFISVpnMnRwc3I0S01sZzJRUlVKcmNtWkJHTURVRzUzZUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitDSU40TVBTLzMrSTlsekhveWx2QWt6RHNocjNXRVgwcTZrc213cFc4NGdNcHYwNzI4cFZXK2FMUW8rVkx4OTNISjJpWmRSMHB4SWJPWnJPWnVtVWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE3ODUxMTIxMDo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjYyMDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONDJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU40Mi5qc29uIjogIntcImtleURhdGFcIjpcIjZZOWxtbGJlNm5BYUlQZ2MzbnZab1hTcGNUVVhOZFBDU0d3SDdEQXlXVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0NzY4NjM4MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwNDQwNTYyMDQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
