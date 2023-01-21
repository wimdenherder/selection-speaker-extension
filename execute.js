function getSelectionText() {
  var text = "";
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    (activeElTagName == "textarea") || (activeElTagName == "input" &&
    /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
    (typeof activeEl.selectionStart == "number")
  ) {
      text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
  } else if (window.getSelection) {
      text = window.getSelection().toString();
  }
  return text;
}

function speak(text, language) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices().find(voice => voice.lang.split('-')[0].toLowerCase() === language.split('-')[0].toLowerCase());
  synth.speak(utterance);
}

function speakSelection() {
  const text = getSelectionText();
  if(!text) return window.alert('Please select some text first.');

  const lang = window.prompt("Enter language code (e.g. en):", "en");

  speak(text, lang);
}

speakSelection()