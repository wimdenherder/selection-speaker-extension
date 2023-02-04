import { translate } from "./language.js";
import { speak } from "./speak.js";

export async function langAlgo(text, srclang, targetlang) {
  const sentences = text.split(/[\.\?\!,\-\n]/);
  const easyLanguages = ["nl","en"];
  for(let k=0;k<1000;k++) {
    for(let i=0;i<sentences.length;i++) {
      const sentence = sentences[i];
      const translation = await translate(sentence, srclang, targetlang);
      if(easyLanguages.includes(srclang)) {
        speak(sentence, srclang);
        speak(translation, targetlang);
        speak(translation, targetlang);
      } else {
        speak(translation, targetlang);
        speak(sentence, srclang);
        speak(sentence, srclang);
      }
    }
  }
}