const {
  mediafire
} = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor');
const axios = require("axios");
const fs = require('fs-extra');
cmd({
  'pattern': "tts",
  'desc': "text to speech.",
  'category': "downloader",
  'filename': __filename,
  'use': "<Hii,this is izuku>"
}, async (_0x48065f, _0x597705, _0x5cdf1e) => {
  if (!_0x5cdf1e) {
    return _0x597705.reply("Please give me a Sentence to change into audio.");
  }
  const _0x4b9e55 = googleTTS.getAudioUrl(_0x5cdf1e, {
    'lang': 'en',
    'slow': false,
    'host': "https://translate.google.com"
  });
  return _0x48065f.sendMessage(_0x597705.chat, {
    'audio': {
      'url': _0x4b9e55
    },
    'mimetype': "audio/mpeg",
    'fileName': "ttsCitelVoid.m4a"
  }, {
    'quoted': _0x597705
  });
});
cmd({
  'pattern': 'ydesc',
  'desc': "Gives descriptive info of query from youtube..",
  'category': 'downloader',
  'filename': __filename,
  'use': "<yt search text>"
}, async (_0x2396a3, _0x202991, _0x1c78ae) => {
  let _0x3f13fa = require("secktor-pack");
  if (!_0x1c78ae) {
    return _0x202991.reply("Example : " + prefix + "yts " + tlang().title + " WhatsApp Bot");
  }
  let _0x407538 = await _0x3f13fa(_0x1c78ae);
  let _0x4dfe1b = "*YouTube Search*\n\n Result From " + _0x1c78ae + "\n\n───────────────────\n";
  let _0xccc7c2 = 0x1;
  for (let _0x37a363 of _0x407538.all) {
    _0x4dfe1b += "⚡ No : " + _0xccc7c2++ + "\n ❤Title : " + _0x37a363.title + "\n♫ Type : " + _0x37a363.type + "\n👾Views : " + _0x37a363.views + "\n⌛Duration : " + _0x37a363.timestamp + "\n⬆️Upload At : " + _0x37a363.ago + "\n👑Author : " + _0x37a363.author.name + "\n🎵Url : " + _0x37a363.url + "\n\n──────────────\n\n";
  }
  return _0x2396a3.sendMessage(_0x202991.chat, {
    'image': {
      'url': _0x407538.all[0x0].thumbnail
    },
    'caption': _0x4dfe1b
  }, {
    'quoted': _0x202991
  });
});
cmd({
  'pattern': "video",
  'desc': "Downloads video from yt.",
  'category': "downloader",
  'filename': __filename,
  'use': "<808-juice wrld >"
}, async (_0x22564a, _0x1aaa1c, _0xe6d972) => {
  let _0x42af26 = require("secktor-pack");
  let _0xebfda5 = await _0x42af26(_0xe6d972);
  let _0x35f3f0 = _0xebfda5.videos[0x0];
  let _0x4056db = _0x35f3f0.url;
  let _0x40cecd = await ytdl.getInfo(_0x4056db);
  if (_0x40cecd.videoDetails.lengthSeconds >= 0xea60) {
    return _0x1aaa1c.reply("😔 Video file too big!");
  }
  let _0x722ea9 = _0x40cecd.videoDetails.title;
  let _0x4bc627 = '' + Math.floor(Math.random() * 0x2710) + ".mp4";
  _0x1aaa1c.reply("*Downloading:* " + _0x722ea9);
  const _0x1236ab = ytdl(_0x4056db, {
    'filter': _0x48f22b => _0x48f22b.itag == 0x16 || _0x48f22b.itag == 0x12
  }).pipe(fs.createWriteStream('./' + _0x4bc627));
  await new Promise((_0x3fdd6b, _0x504a11) => {
    _0x1236ab.on("error", _0x504a11);
    _0x1236ab.on('finish', _0x3fdd6b);
  });
  let _0x12314a = fs.statSync('./' + _0x4bc627);
  let _0x1061ea = _0x12314a.size;
  let _0x514f3e = _0x1061ea / 1048576;
  if (_0x514f3e <= 0x3e8) {
    let _0x5e8776 = {
      'video': fs.readFileSync('./' + _0x4bc627),
      'jpegThumbnail': log0,
      'mimetype': "video/mp4",
      'fileName': _0x722ea9 + '.mp4',
      'caption': " ⿻ Title : " + _0x722ea9 + "\n ⿻ File Size : " + _0x514f3e + " MB",
      'headerType': 0x4,
      'contextInfo': {
        'externalAdReply': {
          'title': _0x722ea9,
          'body': _0x1aaa1c.pushName,
          'thumbnail': await getBuffer(_0xebfda5.all[0x0].thumbnail),
          'renderLargerThumbnail': true,
          'mediaType': 0x2,
          'mediaUrl': _0xebfda5.all[0x0].thumbnail,
          'sourceUrl': _0xebfda5.all[0x0].thumbnail
        }
      }
    };
    _0x22564a.sendMessage(_0x1aaa1c.chat, _0x5e8776, {
      'quoted': _0x1aaa1c
    });
    return fs.unlinkSync('./' + _0x4bc627);
  } else {
    _0x1aaa1c.reply("😔 File size bigger than 100mb.");
  }
  return fs.unlinkSync('./' + _0x4bc627);
});
cmd({
   'pattern': 'apk',
  'alias': ['modapk'],
  'desc': "Downloads apks  .",
  'category': "downloader",
  'filename': __filename,
  'use': "<add sticker url.>"
}, async (_0x7b09ff, _0x4af114) => {
  try {
    if (!_0x4af114) {
      return _0x7b09ff.reply("*_Uhh dear, Give me App Name!_*");
    }
    let _0x468cc8 = await search(_0x4af114);
    let _0x538b40 = {};
    if (_0x468cc8.length) {
      _0x538b40 = await download(_0x468cc8[0x0].id);
    } else {
      return _0x7b09ff.reply("*_Apk not found, Try another name!!_*");
    }
    const _0x48bc12 = parseInt(_0x538b40.size);
    if (_0x48bc12 > 0xc8) {
      return _0x7b09ff.reply("❌ File size bigger than 200mb.");
    }
    const _0x31321c = _0x538b40.dllink;
    let _0x24f726 = await fancytext("『 *ᗩᑭᏦ  ᗞᝪᗯᑎしᝪᗩᗞᗴᖇ* 』\n\n*APP Name :* " + _0x538b40.name + "\n*App Id :* " + _0x538b40["package"] + "\n*Last Up :* " + _0x538b40.lastup + "\n*App Size :* " + _0x538b40.size + "\n\n\n " + Config.caption, 0x19);
    const _0x3e266b = (_0x538b40?.["name"] || "Downloader") + ".apk";
    const _0x585f79 = 'temp/' + _0x3e266b;
    let _0x533c85 = await _0x7b09ff.reply(_0x538b40.icon, {
      'caption': _0x24f726
    }, "img", _0x7b09ff);
    axios.get(_0x31321c, {
      'responseType': "stream"
    }).then(_0x3cdb1d => {
      const _0x406256 = fs.createWriteStream(_0x585f79);
      _0x3cdb1d.data.pipe(_0x406256);
      return new Promise((_0xd7f976, _0x27915) => {
        _0x406256.on('finish', _0xd7f976);
        _0x406256.on("error", _0x27915);
      });
    }).then(() => {
      let _0x389371 = {
        'document': fs.readFileSync(_0x585f79),
        'mimetype': 'application/vnd.android.package-archive',
        'fileName': _0x3e266b
      };
      _0x7b09ff.bot.sendMessage(_0x7b09ff.jid, _0x389371, {
        'quoted': _0x533c85
      });
      try {
        fs.unlink(_0x585f79);
      } catch {}
    })['catch'](_0x2490b5 => {
      try {
        fs.unlink(_0x585f79);
      } catch {}
      ;
      _0x7b09ff.reply("*_Apk not Found, Sorry_*");
    });
  } catch (_0x4540ef) {
    await _0x7b09ff.error(_0x4540ef + "\n\ncommand: apk", _0x4540ef, "*_Apk not Found!_*");
  }
});
cmd({
  'pattern': 'song',
  'desc': "Sends info about the query(of youtube video/audio).",
  'category': "downloader",
  'filename': __filename,
  'use': "<faded-Alan walker.>"
}, async (_0x7256d4, _0x57a045, _0x1759e5) => {
  if (!_0x1759e5) {
    return _0x57a045.reply("Use " + command + " Back in Black");
  }
  let _0x4b5823 = require("secktor-pack");
  let _0x4a5ebd = await _0x4b5823(_0x1759e5);
  let _0x42d088 = _0x4a5ebd.videos[0x0];
  let _0x5b2454 = {
    'image': {
      'url': _0x42d088.thumbnail
    },
    'caption': "\n╔═════════•∞•═╗\n│⟣ " + tlang().title + " \n│⟣ *Youtube Player* ✨\n│⟣ *Title:* " + _0x42d088.title + "\n│⟣ *Duration:* " + _0x42d088.timestamp + "\n│⟣ *Viewers:* " + _0x42d088.views + "\n│⟣ *Uploaded:* " + _0x42d088.ago + "\n│⟣ *Author:* " + _0x42d088.author.name + "\n╚═•∞•═════════╝\n°⦿ *Url* : " + _0x42d088.url + "\n",
    'footer': tlang().footer,
    'headerType': 0x4
  };
  return _0x7256d4.sendMessage(_0x57a045.chat, _0x5b2454, {
    'quoted': _0x57a045
  });
});
cmd({
  'pattern': "ringtone",
  'desc': "Downloads ringtone.",
  'category': 'downloader',
  'filename': __filename,
  'use': "<ringtone name>"
}, async (_0x4132c6, _0x4e8d96, _0x5a465f) => {
  if (!_0x5a465f) {
    return _0x4e8d96.reply("Example: " + prefix + "ringtone back in black");
  }
  let _0x1fd602 = await ringtone(_0x5a465f);
  let _0xea37f0 = _0x1fd602[Math.floor(Math.random() * _0x1fd602.length)];
  return _0x4132c6.sendMessage(_0x4e8d96.chat, {
    'audio': {
      'url': _0xea37f0.audio
    },
    'fileName': _0xea37f0.title + '.mp3',
    'mimetype': "audio/mpeg"
  }, {
    'quoted': _0x4e8d96
  });
});
cmd({
  'pattern': "pint",
  'desc': "Downloads image from pinterest.",
  'category': "downloader",
  'filename': __filename,
  'use': "<text|image name>"
}, async (_0x11537e, _0x42ea60, _0x1050aa) => {
  if (!_0x1050aa) {
    return reply("What picture are you looking for?") && _0x11537e.sendMessage(_0x42ea60.chat, {
      'react': {
        'text': '❌',
        'key': _0x42ea60.key
      }
    });
  }
  try {
    anu = await pinterest(_0x1050aa);
    result = anu[Math.floor(Math.random() * anu.length)];
    let _0x407d1c = {
      'image': {
        'url': result
      },
      'caption': " ",
      'footer': tlang().footer,
      'headerType': 0x4,
      'contextInfo': {
        'externalAdReply': {
          'title': "Here you go✨",
          'body': '' + Config.ownername,
          'thumbnail': log0,
          'mediaType': 0x2,
          'mediaUrl': '',
          'sourceUrl': ''
        }
      }
    };
    return _0x11537e.sendMessage(_0x42ea60.chat, _0x407d1c, {
      'quoted': _0x42ea60
    });
  } catch (_0x22cf1b) {
    console.log(_0x22cf1b);
  }
});
cmd({
  'pattern': "mediafire",
  'desc': "Downloads zip from Mediafire.",
  'category': "downloader",
  'filename': __filename,
  'use': "<url of mediafire>"
}, async (_0x1a6847, _0x4aac14, _0x104cfb) => {
  if (!_0x104cfb) {
    return _0x4aac14.reply("Give link " + tlang().greet);
  }
  if (!isUrl(_0x104cfb.split(" ")[0x0]) && !_0x104cfb.split(" ")[0x0].includes("mediafire.com")) {
    return reply("The link you provided is invalid");
  }
  const _0x3c603c = await mediafire(_0x104cfb);
  if (_0x3c603c[0x0].size.split('MB')[0x0] >= 0x3e7) {
    return reply("*File Over Limit* " + util.format(_0x3c603c));
  }
  const _0x4782ee = "*ᴵᶻᵁᴷᵁ Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*\n*Nᴀᴍᴇ* : " + _0x3c603c[0x0].nama + "\n*Sɪᴢᴇ* : " + _0x3c603c[0x0].size + "\n*Mɪᴍᴇ* : " + _0x3c603c[0x0].mime + "\n*Lɪɴᴋ* : " + _0x3c603c[0x0].link;
  reply('' + _0x4782ee);
  return _0x1a6847.sendMessage(_0x4aac14.chat, {
    'document': {
      'url': _0x3c603c[0x0].link
    },
    'fileName': _0x3c603c[0x0].nama,
    'mimetype': _0x3c603c[0x0].mime
  }, {
    'quoted': _0x4aac14
  })['catch'](_0x1d0478 => reply("could not find anything"));
});
cmd({
  'pattern': "play",
  'alias': ['song'],
  'desc': "Downloads audio from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<text>"
}, async (_0x384cae, _0x27bbc7, _0x81f522) => {
  let _0x20790a = require('secktor-pack');
  let _0x3d01cd = await _0x20790a(_0x81f522);
  let _0x2d7f1e = _0x3d01cd.videos[0x0];
  let _0x5f4c8a = await ytdl.getInfo(_0x2d7f1e.url);
  if (_0x5f4c8a.videoDetails.lengthSeconds >= 0xea60) {
    return _0x27bbc7.reply("😔 Video file too big!");
  }
  let _0x1a52fb = _0x5f4c8a.videoDetails.title;
  let _0x195afc = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
  _0x27bbc7.reply("*Downloadig:* " + _0x1a52fb);
  const _0x1afc79 = ytdl(_0x2d7f1e.url, {
    'filter': _0x280564 => _0x280564.audioBitrate == 0xa0 || _0x280564.audioBitrate == 0x80
  }).pipe(fs.createWriteStream('./' + _0x195afc));
  await new Promise((_0xe0fdd8, _0x174ce4) => {
    _0x1afc79.on('error', _0x174ce4);
    _0x1afc79.on("finish", _0xe0fdd8);
  });
  let _0x1e4099 = fs.statSync('./' + _0x195afc);
  let _0x356823 = _0x1e4099.size;
  let _0x30bbe5 = _0x356823 / 1048576;
  if (_0x30bbe5 <= 0x3e8) {
    let _0x1f66ba = {
      'audio': fs.readFileSync('./' + _0x195afc),
      'mimetype': 'audio/mpeg',
      'fileName': _0x1a52fb + '.mp3',
      'headerType': 0x4,
      'contextInfo': {
        'externalAdReply': {
          'title': _0x1a52fb,
          'body': _0x27bbc7.pushName,
          'renderLargerThumbnail': true,
          'thumbnailUrl': _0x3d01cd.all[0x0].thumbnail,
          'mediaUrl': _0x81f522,
          'mediaType': 0x1,
          'thumbnail': await getBuffer(_0x3d01cd.all[0x0].thumbnail),
          'sourceUrl': _0x81f522
        }
      }
    };
    await _0x384cae.sendMessage(_0x27bbc7.chat, _0x1f66ba, {
      'quoted': _0x27bbc7
    });
    return fs.unlinkSync('./' + _0x195afc);
  } else {
    _0x27bbc7.reply("❌ File size bigger than 100mb.");
  }
  fs.unlinkSync('./' + _0x195afc);
});
cmd({
  'pattern': "ytmp4",
  'desc': "Downloads video from youtube.",
  'category': "downloader",
  'filename': __filename,
  'use': "<yt video url>"
}, async (_0x2b6034, _0x27e115, _0x3c9531) => {
  if (!_0x3c9531) {
    _0x27e115.reply("❌Please provide me a url");
    return;
  }
  try {
    if (!_0x3c9531.startsWith("http")) {
      return _0x27e115.reply("❌ Give youtube link!");
    }
    let _0x94895a = await ytdl.getInfo(_0x3c9531);
    if (_0x94895a.videoDetails.lengthSeconds >= 0xea60) {
      return _0x27e115.reply("❌ Video file too big!");
    }
    let _0x262232 = _0x94895a.videoDetails.title;
    let _0x4d382c = '' + Math.floor(Math.random() * 0x2710) + ".mp4";
    const _0x1ed8ba = ytdl(_0x3c9531, {
      'filter': _0x4d5ff1 => _0x4d5ff1.itag == 0x16 || _0x4d5ff1.itag == 0x12
    }).pipe(fs.createWriteStream('./' + _0x4d382c));
    await new Promise((_0x41cfea, _0x5da4a3) => {
      _0x1ed8ba.on('error', _0x5da4a3);
      _0x1ed8ba.on('finish', _0x41cfea);
    });
    let _0x1738be = fs.statSync('./' + _0x4d382c);
    let _0x42e668 = _0x1738be.size;
    let _0x565dda = _0x42e668 / 1048576;
    if (_0x565dda <= 0x3e8) {
      let _0x5d0c5a = require('secktor-pack');
      let _0x6b5f02 = await _0x5d0c5a(_0x3c9531);
      let _0x111212 = {
        'video': fs.readFileSync('./' + _0x4d382c),
        'jpegThumbnail': log0,
        'mimetype': 'video/mp4',
        'fileName': _0x262232 + '.mp4',
        'caption': " ⿻ Title : " + _0x262232 + "\n ⿻ File Size : " + _0x565dda + " MB",
        'headerType': 0x4,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x262232,
            'body': _0x27e115.pushName,
            'thumbnail': await getBuffer(_0x6b5f02.all[0x0].thumbnail),
            'renderLargerThumbnail': true,
            'mediaType': 0x2,
            'mediaUrl': _0x6b5f02.all[0x0].thumbnail,
            'sourceUrl': _0x6b5f02.all[0x0].thumbnail
          }
        }
      };
      _0x2b6034.sendMessage(_0x27e115.chat, _0x111212, {
        'quoted': _0x27e115
      });
      return fs.unlinkSync('./' + _0x4d382c);
    } else {
      _0x27e115.reply("❌ File size bigger than 100mb.");
    }
    return fs.unlinkSync('./' + _0x4d382c);
  } catch (_0x256711) {
    console.log(_0x256711);
  }
});
cmd({
  'pattern': "ytmp3",
  'desc': "Downloads audio by yt link.",
  'category': 'downloader',
  'use': "<yt video url>"
}, async (_0x1210d2, _0xa6efbf, _0x582730) => {
  if (_0x582730.length === 0x0) {
    reply("❌ URL is empty! \nSend " + prefix + "ytmp3 url");
    return;
  }
  try {
    if (!_0x582730.startsWith("http")) {
      _0xa6efbf.reply("❌ Give youtube link!");
      return;
    }
    let _0x5eb6e0 = await ytdl.getInfo(_0x582730);
    if (_0x5eb6e0.videoDetails.lengthSeconds >= 0xea60) {
      reply("❌ I can't download that long video!");
      return;
    }
    let _0x2c7067 = _0x5eb6e0.videoDetails.title;
    let _0x401705 = '' + Math.floor(Math.random() * 0x2710) + '.mp3';
    const _0x15f64d = ytdl(_0x582730, {
      'filter': _0xe2d4c => _0xe2d4c.audioBitrate == 0xa0 || _0xe2d4c.audioBitrate == 0x80
    }).pipe(fs.createWriteStream('./' + _0x401705));
    await new Promise((_0x20ac9f, _0x450a9c) => {
      _0x15f64d.on("error", _0x450a9c);
      _0x15f64d.on('finish', _0x20ac9f);
    });
    let _0x313e45 = fs.statSync('./' + _0x401705);
    let _0x36ec96 = _0x313e45.size;
    let _0x389a2b = _0x36ec96 / 1048576;
    if (_0x389a2b <= 0x3e8) {
      let _0x558b5e = require("secktor-pack");
      let _0x1ee3e6 = await _0x558b5e(_0x582730);
      let _0x5b43a9 = {
        'audio': fs.readFileSync('./' + _0x401705),
        'mimetype': "audio/mpeg",
        'fileName': _0x2c7067 + ".mp3",
        'headerType': 0x4,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x2c7067,
            'body': _0xa6efbf.pushName,
            'renderLargerThumbnail': true,
            'thumbnailUrl': _0x1ee3e6.all[0x0].thumbnail,
            'mediaUrl': _0x582730,
            'mediaType': 0x1,
            'thumbnail': await getBuffer(_0x1ee3e6.all[0x0].thumbnail),
            'sourceUrl': _0x582730
          }
        }
      };
      await _0x1210d2.sendMessage(_0xa6efbf.chat, _0x5b43a9, {
        'quoted': _0xa6efbf
      });
      return fs.unlinkSync('./' + _0x401705);
    } else {
      _0xa6efbf.reply("❌ File size bigger than 100mb.");
    }
    fs.unlinkSync('./' + _0x401705);
  } catch (_0x4c450f) {
    console.log(_0x4c450f);
  }
});
cmd({
  'pattern': 'ytdoc',
  'desc': "Downloads audio by yt link as document.",
  'category': 'downloader',
  'use': "<ytdoc video url>"
}, async (_0x3c1a68, _0x22061a, _0x193c82) => {
  if (_0x193c82.length === 0x0) {
    reply("❌ URL is empty! \nSend " + prefix + "ytmp3 url");
    return;
  }
  try {
    if (!_0x193c82.startsWith("http")) {
      _0x22061a.reply("❌ Give youtube link!");
      return;
    }
    let _0x426426 = await ytdl.getInfo(_0x193c82);
    if (_0x426426.videoDetails.lengthSeconds >= 0xea60) {
      reply("❌ I can't download that long video!");
      return;
    }
    let _0x548caf = _0x426426.videoDetails.title;
    let _0x2cdb41 = '' + Math.floor(Math.random() * 0x2710) + '.mp3';
    const _0x337bd9 = ytdl(_0x193c82, {
      'filter': _0x4a8d68 => _0x4a8d68.audioBitrate == 0xa0 || _0x4a8d68.audioBitrate == 0x80
    }).pipe(fs.createWriteStream('./' + _0x2cdb41));
    await new Promise((_0x2aab17, _0x5b77fa) => {
      _0x337bd9.on('error', _0x5b77fa);
      _0x337bd9.on("finish", _0x2aab17);
    });
    let _0xcf3102 = fs.statSync('./' + _0x2cdb41);
    let _0x12d525 = _0xcf3102.size;
    let _0x2d0d67 = _0x12d525 / 1048576;
    if (_0x2d0d67 <= 0x3e8) {
      let _0x1687fd = require("secktor-pack");
      let _0x8038e2 = await _0x1687fd(_0x193c82);
      let _0x1df995 = {
        'document': fs.readFileSync('./' + _0x2cdb41),
        'mimetype': "audio/mpeg",
        'fileName': _0x548caf + '.mp3',
        'headerType': 0x4,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x548caf,
            'body': _0x22061a.pushName,
            'renderLargerThumbnail': true,
            'thumbnailUrl': _0x8038e2.all[0x0].thumbnail,
            'mediaUrl': _0x193c82,
            'mediaType': 0x1,
            'thumbnail': await getBuffer(_0x8038e2.all[0x0].thumbnail),
            'sourceUrl': _0x193c82
          }
        }
      };
      await _0x3c1a68.sendMessage(_0x22061a.chat, _0x1df995, {
        'quoted': _0x22061a
      });
      return fs.unlinkSync('./' + _0x2cdb41);
    } else {
      _0x22061a.reply("❌ File size bigger than 100mb.");
    }
    fs.unlinkSync('./' + _0x2cdb41);
  } catch (_0xe497b5) {
    console.log(_0xe497b5);
  }
});
