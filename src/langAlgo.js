import { translate } from "./language.js";
import { speak } from "./speak.js";

export async function langAlgo(text, srclang, targetlang) {
  cfg.algoIsRunning = true;
  const sentences = text.split(/[\.\?\!,\-\n]/);
  const easyLanguages = ["nl","en"];
  for(let k=0;k<1000;k++) {
    for(let i=0;i<sentences.length;i++) {
      const sentence = sentences[i];
      const translation = await translate(sentence, srclang, targetlang);
      if(easyLanguages.includes(srclang)) {
        if(cfg.algoIsRunning)
          await speak(sentence, srclang);
        if(cfg.algoIsRunning)
          await speak(translation, targetlang);
        if(cfg.algoIsRunning)
          await speak(translation, targetlang);
      } else {
        if(cfg.algoIsRunning)
          await speak(translation, targetlang);
        if(cfg.algoIsRunning)
          await speak(sentence, srclang);
        if(cfg.algoIsRunning)
          await speak(sentence, srclang);
      }
    }
  }
}