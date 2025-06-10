const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUTZOiSBD9L3XVmAZUQCM6YhEQEVFoFNGNPZRQQLV8SRUITPjfN9Dp6TnszvbeiiQr36uXL/M7yHJMkIFaMPsOihLXkKL+SNsCgRmYV2GISjAEAaQQzICp2ZubYcvp3lwt1ylMX+xpts3nF8WhucLyIz67uJNB03H7V3AfgqI6J9j/TUGZ8nNuwZ7l8ZUepupbfCoHWmJPuvfT227neYtzQPTsyKNR/grufUWIS5xFahGjFJUwMVBrQVx+jf7AqtWu0cXgQuBI2MuxvzzYm4VVryniqs2GDwl3JKP8esi/Rt9YNgHKph1u9k0cpmWtT7H+zrADl+T5atIQnb2w8VG5Zv6TPsFRhgI9QBnFtP2y7rJp8JqUqONFaiu8eB5sL+P43EwtpSDxRhMvFzFPHQ9Hnv014kJ+fRlbnTbi6sbZRmy+OO/azdvWWNDgfb83mqNIl+fdLbTtX4lb5YdXLv9Hd15+06RstbF5iWt16r6vwkZV9pW1nFvWdWnwYmR7XZiwC/Fr9FfyDpm1pAi+Mg+2rgvLQ6vcogTXi4RzzVZbIg9To+K56JM+pFX5O5ZRtozDajlqlWvsHBe1E7whVTW6ZuTZgnHhVM1n8tOJMR3DT/f5KSVXx+48JSJcYWTa1o3N+Spx0jg+iXgqs1e6aKLb6+NFF9TqAZix9yEoUYQJLSHFefaIMdwQwKB2kF8i+pAXSJ5QnJ3dOvet48t6a1zcdBxWm9CRrbl54iXTPB93sF55u/wVDEFR5j4iBAVLTGhetiYiBEaIgNmffw1Bhhr6bFwPN2KHIMQlofusKpIcBh9d/fgJfT+vMuq0mS/3B1SCGfMZRpTiLCK9jlUGSz/GNZJjSAmYhTAh6OcLUYmCH7Gft/tbAaIQJ6R39RYjLKiyqldsbuqaJqmRJEcS+ET7aNtTFrQyIstc1VZm2EfhTPijCyFOOVciR1cRithnj2QbWsFNf/2HImAG0ul1WrH1/H2/nuqB2qwFeaK8MfYIUS7mveJ9Kas7W452SUUHiy21nau4jF4O0AwvjjXP9vqlup2ZZXuOWX+w3UhCSBT7tUcLUI199CtY0XiZcZhfI4co+3oy59LKfWcoaVJtY9XhmKOdRNyT2HVVIKrFIdKaVmJasfOaaLOaa6lZx+7x5gY3eF0n/gpLroKjp6HSh5NxAGZgyk7HwkTgphOen02EP8i3W98PWBTfMkTBECSPtNGUY0SR4QWRZZhJn9jHP2Yj+bGT8MM1feX+M8ToMeIZ7PH+G+mpQe8k5j78pcaPpfEvgzf3sJMrnXzuJu1F23LCNl0c0rygib3WFvaAP3qbw1rJupEvg/v9ryEoEkjDvEzBDMAsKHMcgCEo86q3pp6F+e9W6VzXZekpYgIJlT7tvsMpIhSmBZixwng6mUxEfvzMssq8WEIS9zqGx5tsgPvfFIzOrjwHAAA=',
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
