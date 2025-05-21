const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VU27KiOBT9l7xqtYAgaNWpGhREFA8KipepeQgQIHI1CSh2+e9TnEt3P8z0nOEp7OzstbL22vkOihJTtEItmHwHFcENZKhbsrZCYAKmdRQhAvoghAyCCVA26l6xpOzsZPpokQ8Wni/bXlEMeJwGDy25nh+HaeOPd/v9C3j2QVX7GQ5+U3ARqVAZDWRjO/C8Xru57x+9wAuCozbmeYnue7NDFfKJaqncC3h2FSEmuIj1KkE5IjBboXYDMfka/XhGggKOTDo3qV8t25lursXmVASxID84h1xWu7qolwYdrr9G3+LmI3+xNmxu97A3nlv6Yu9kJLEipM5+ufVUVYm2hLfxQ3mnT3FcoNAMUcEwa7+s+2GxvWlcnhkjJeRpa9mU4CSUL/XrYuUcZ3e+Fg5z2cduGn+NeHm+JKFyjDeCmtqRn4x3C0mJzRjHdJ3CA7FcqljW/DJI0l+Jb8inV9L/o3trpOHN3bf245UXGvdCm0bg3QG556LbWA+a+ohLjvb1lNGv0d/7Wyw6pde4RIo4lJ2WV8m6GXLB8Y9joQmDHR37c/GyenA/6UNWk9+xbHbpaZAsnftwc73kGjsV04tb+DI/iN3yYKxrjosdzPP+MV2M5SwqeW+KK10f5GzVxGFpXlZDcYrr2dCGQay77SB3LtuXtxulqDVDMOGffUBQjCkjkOGy6GJcH8CwcVFAEHsTFyx2i7lt8UN3s7/GmjjCbYWaV8ssNV9xT5phR3btcTeoF/oL6IOKlAGiFIULTFlJ2jWiFMaIgsmff/VBge7svW0d2JDvgwgTyvZFXWUlDD97+rkJg6CsC+a2RTDrFoi8M/wII8ZwEdNOxbqAJEhwg2YJZBRMIphR9ON+iKDwI/bjdHcqRAzijIIJmNmGOIKqpr/OZkzRDUPVY3UWq+An2mfT3mWpD57zekxznxl1qVyknnBOZItrboFKfHNtUpHk93Xq2IX68g9FwAQI3v22uhsn6bZZnlm+Pk4p9Pfz0f3cQl/S9uLxlmhp60k3f2qYZqgIJ8M83ZzeNE/nmfcI1eh4k+MQDZLRfeAoRMdIi186tBA1OEC/gjXzVe75Vr243DIhiOfGdbwOyFV96KNSv77uo8P5FEWZlu2Ew13eXneFs7G8KzeETKokpFUuSaaNpkvCqeeeiroeoib5sFP+5mMcggkY82NFGUojSRoNJ+L4D/rt1vUDVtW3AjHQB9lbmiCOFV4WpPGQlwSR7zK7jc/RyD6eJPxmm6509xth9DbhBewA/xvqXYQ3Uz/7v9T4eDP+Ze6mfpbtd560zGWHXDdmL2L5CbVjS1moK6HVZpa9kuhuqe+qG3g+/+qDKoMsKkkOJgAWISlxCPqAlHXnTbOIyt+AzVTTnH6omEHK1J9+3+EcUQbzCkx4WZQVYcwpo/esDSmrBaQJmADx7GxGLuiDvFWrymWQfY4PULtvVrbg+TcwNETTWAcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
