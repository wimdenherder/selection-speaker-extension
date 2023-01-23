import { detectLanguage, translateBiggerTexts } from './language';
import { getContentOfArticle, getSelectionText }  from './scraper';
import { speak } from './speak';

async function main() {
  if(synth?.speaking)
    synth.cancel();
  let text = getSelectionText() || getContentOfArticle();

  const detectedLanguage = await detectLanguage(text);
  const lang = window.prompt("Enter language code (e.g. nl = netherlands, en = english). It will be translated automatically. ", detectedLanguage);
  if(!lang) return console.log('No language code entered.');

  if(lang !== detectedLanguage)
    text = await translateBiggerTexts(text, 'auto', lang);
  
  await speak(text, lang);
}

main();