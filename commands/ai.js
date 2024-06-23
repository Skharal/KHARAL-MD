smd({
    pattern: "gemini",
    category: "ai",
    desc: "Chat with Bard AI model",
    use: "<text>",
    filename: __filename,
  }, async (Void, citel , text, { cmdName }) => {
    if (!text) return citel.reply(`*_Please provide a word_*\n*_Example ${prefix + cmdName} What is the meaning of life?_*`);
  
    try {
      const res = await (await fetch(`https://api.maher-zubair.tech/ai/gemini?q=${text}`)).json();
  
      if (!res.status === 200) return citel.send("*There's a problem, try again later!*");
  
      const { result } = res;
      const data = "ɢᴇᴍɪɴɪ ᴀɪ"
      const tbl = "```";
      await send(message, `${data}${tbl}${result}${tbl}`);
    } catch (e) {
      return await citel.error(`${e}\n\n command: ${cmdName}`, e, `*_An error occurred while processing your request_*`);
    }
  });
