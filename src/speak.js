
// synth is loaded in content-script to make it globally available in order to be able to cancel speech
function speak(text, language) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices().find(voice => voice.lang.split('-')[0].toLowerCase() === language.split('-')[0].toLowerCase());
  synth.speak(utterance);
}

exports.speak = speak;