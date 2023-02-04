import { detectLanguage, translateBiggerTexts } from './language';
import { getContentOfArticle, getSelectionText }  from './scraper';
import { speak } from './speak';
import { langAlgo } from './langAlgo';

async function main() {
  synth.cancel();
  cfg.algoIsRunning = false;
  
  let text = getSelectionText() || getContentOfArticle();

  const detectedLanguage = await detectLanguage(text);
  let lang = window.prompt("Enter language code (e.g. nl = netherlands, en = english). It will be translated automatically. ", detectedLanguage);
  if(!lang) return console.log('No language code entered.');
  
  if(lang[lang.length-1] === "!") { // with ! at the end, it will be translated with the learning algorithm!
    lang = lang.slice(0, -1);
    if(detectedLanguage !== lang)
      return await langAlgo(text, detectedLanguage, lang)
  } else {
    if(detectedLanguage !== lang)
      text = await translateBiggerTexts(text, detectedLanguage, lang);
  }
  await speak(text, lang);
}


main();