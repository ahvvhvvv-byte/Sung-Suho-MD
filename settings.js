const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0M1MnlIZVJvT1VOTmhIVW1IbVJUZWlIeHlheU9qQ0VJNGVNRmVyam8yST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDRVN0hLTHoyTlVxWEkzM1FDMmNmejNVSWZFRU1XdGZqVk9zM24rZHRoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTTBJUVdIZlhZVWZhc1NXSExMc2FBYW0zOG55cVdlTkxhZUdQRTdXb1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTXZtL1BCTmtlNkFUcGZEd0E4TW5BQ1NHclR3ZWdUTkNockpYcC9hdFNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEMWZva2ZhbWpFS2QxVFplc1poUk5YYStiKzBkak8rQ1c3ZjkxY1NSVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjNXZqaXpGVENzZXY1c3JOYmIybzV4dmRZc1RyZ3R0YXZLUWUvKzQ1ejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tGcUlyaGNFSmNNczBneG1Sb0NhQ1g0NzdydXViWnVseFhEb0Z0bTJVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjFVZ0twNXY0VTVnNWdyNVNxSjh4aEJzbmJZSjlUN2FZa3ZNUTRwSStnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0MzU4VGd3bHhRYWJ2L05UVWZIVUZRQm1SRW5zNEowbjFpZUVJV1orMTE3WkpuRWx2SUV6SnhBK0YwZXB2WUx1d3luVytzYzMvL2VVU3FyZmZBZkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IllFeWRvTk1RdWltb1ZFcWoxSDdCZmoxYkZIZ2oyY2I1YytXZmpMMUhWbnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjAxMTAxMjU3NjE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RjhGRTUxMEQxQTRFOUUyMTlCQjlBMTM5OEVEMDAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ0ODg5MDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIwMTEwMTI1NzYxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUVEQUFFMjBDOEFFN0M2QTAyMkE5MzVCNEI2REFCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0NDg4OTA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMDExMDEyNTc2MTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUyN0I1RjdFMTIzMkJBNkIzQjQ4MEE5Rjc0REMwNjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDQ4ODkwNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjAxMTAxMjU3NjE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MDQ0MUYwMjUzREZCNDhBNDFCODQ0MTA2RUE0OERGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ0ODg5MDZ9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjIwMTEwMTI1NzYxNzoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtYWx2aW4iLCJsaWQiOiIxODA5MzA1NDcyOTQzMzY6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeUI2b0lDRUx2dHI4a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveWJEc3Z6aEw3WEp3a0FPWTY1QWJGbjdzUjZvVTgrZ2VSZFFNOHV5Q2hzPSIsImFjY291bnRTaWduYXR1cmUiOiJCTjNzL1Q1ZXVJTU1RTHUwZEdJWitvZ093THlETWtLQ2hXa1pCZXVJUHhQL1JiYy8rSXovcU9ZMWtrcDdWWVl5T3ZuaWJKcU9MSXhXZHNzb3YrNjdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM1JnbDdOWkQ1SUY2dS80ZTFhOUVzWWlRM0liMVhGUytoN1ZzckZOanYwTm1pV0xuS2pKaWo0MzV2eEM1NXNQLzh6YnRHcjIvcEZwQzFSa0lLZTVoQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDExMDEyNTc2MTc6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjhtdzdMODRTKzF5Y0pBRG1PdVFHeForN0VlcUZQUG9Ia1hVRFBMc2dvYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0NDg4OTA1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVWRiJ9",
    // add your Session Id make sure it starts with suho~

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot

    BOT_NAME: process.env.BOT_NAME || "sᴜʜᴏ-ᴍᴅ",
    // add bot name here for menu

    MODE: process.env.MODE || "public",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*sᴛᴀᴛᴜs sᴇᴇɴ ʙʏ ᴍᴇ 😆*",
    // set the auto reply message on status reply  

    WELCOME: process.env.WELCOME || "true",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "true",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/3lv5zs.jpg",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3lv5zs.jpg",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || 
`> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ

ᴋᴇᴇᴘ ᴜsɪɴɢ ✦sᴜɴɢ sᴜʜᴏ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡

*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*

> ɢɪᴛʜᴜʙ : github.com/NaCkS-ai/SungSu-ho-MD`,e",
    // make this true for custom emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,💛,💚,💙,💜,🤎,🖤,🤍",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links without removing member 

    OWNER_NUMBER: process.env.OWNER_NUMBER || "27649342626",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "ᴍʀ sᴜɴɢ",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ sᴜɴɢ sᴜʜᴏ*",
    // add bot owner description  

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing  

    READ_CMD: process.env.READ_CMD || "false",
    // true if want mark commands as read  

    DEV: process.env.DEV || "27649342626",
    // replace with your whatsapp number  

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox' or 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recording 

    version: process.env.version || "v2.10.0"

    
};
