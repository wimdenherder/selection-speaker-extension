async function translate(text, source, target) {
  text = text.replace(/%/g,'procent');
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&hl=en-US&dt=qca&dt=t&dt=bd&dj=1&source=icon&sl=${source}&tl=${target}&q=${text}`);
  const json = await response.json();
  return json.sentences?.map(x => x.trans).join(" ");
}

async function detectLanguage(text) {
  text = text.slice(0,1000);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=nl&hl=nl&dt=t&dt=bd&dj=1&source=bubble&tk=200215.200215&q=${text}`;
  const response = await (await fetch(url)).json();
  return response.ld_result?.srclangs?.[0];
}

async function translateBiggerTexts(text, source, target) {
  const maxSize = 1500;
  const result = [];
  for(let i=0;i<text.length;i+=maxSize) {
    const translation = await translate(text.slice(i, i+maxSize), source, target);
    console.log('index ' + i + ' translation: ' + translation);
    result.push(translation);
  }
  return result.join(" ");
}

exports.translate = translate;
exports.detectLanguage = detectLanguage;
exports.translateBiggerTexts = translateBiggerTexts;