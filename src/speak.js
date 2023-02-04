import { alertToBox } from './box';

// synth is loaded in content-script to make it globally available in order to be able to cancel speech
async function speak(text, language) {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices().find(voice => voice.lang.split('-')[0].toLowerCase() === language.split('-')[0].toLowerCase());
    console.log('alertbox ' + text);
    alertToBox(text);
    synth.speak(utterance);
    utterance.onend = resolve;
  });
}

export {speak};