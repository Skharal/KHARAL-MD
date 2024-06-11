const axios = require('axios')
const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,getBuffer ,sck1, tiny, fancytext, listall,cmd,ffmpeg } = require('../lib/')
const fs = require('fs-extra');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fetch = require("node-fetch");


 cmd({
             pattern: "attp",
             desc: "Makes glowing sticker of text.",
             category: "sticker",
             filename: __filename,
             use: '< text.>',
         },
         async(Void, citel, text) => {
 if(!text) return citel.reply("*_Please provide text to generate sticker_*")
 let a = await getBuffer(`https://api.maher-zubair.tech/maker/text2gif?q=${text}`)
 return citel.reply(a,{packname:'MALIK-MD',author:'ATTP'},"sticker") 
         }
     )
