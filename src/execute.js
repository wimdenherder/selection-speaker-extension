import * as DOMPurify from 'dompurify';
import html2md from 'html-to-md'

let contentSelector;
function getContainer() {
  let selectedContainer;

  if (contentSelector && document.querySelector(contentSelector)) {
    selectedContainer = document.querySelector(contentSelector);
  } else if (document.head.querySelector("meta[name='articleBody'")) {
    selectedContainer = document.createElement("div");
    selectedContainer.innerHTML = DOMPurify.sanitize(document.head.querySelector("meta[name='articleBody'").getAttribute("content"));
  } else {
    const numWordsOnPage = document.body.innerText.match(/\S+/g).length;
    let ps = document.body.querySelectorAll("p");

    // Find the paragraphs with the most words in it
    let pWithMostWords = document.body,
      highestWordCount = 0;

    if (ps.length === 0) {
      ps = document.body.querySelectorAll("div");
    }

    ps.forEach(p => {
      if (checkAgainstBlacklist(p, 3) // Make sure it's not in our blacklist
        && p.offsetHeight !== 0) { //  Make sure it's visible on the regular page
        const myInnerText = p.innerText.match(/\S+/g);
        if (myInnerText) {
          const wordCount = myInnerText.length;
          if (wordCount > highestWordCount) {
            highestWordCount = wordCount;
            pWithMostWords = p;
          }
        }
      }

      // Remove elements in JR that were hidden on the original page
      if (p.offsetHeight === 0) {
        p.dataset.simpleDelete = true;
      }
    });

    // Keep selecting more generally until over 2/5th of the words on the page have been selected
    selectedContainer = pWithMostWords;
    let wordCountSelected = highestWordCount;

    while (wordCountSelected / numWordsOnPage < 0.4
      && selectedContainer != document.body
      && selectedContainer.parentElement.innerText) {
      selectedContainer = selectedContainer.parentElement;
      wordCountSelected = selectedContainer.innerText.match(/\S+/g).length;
    }

    // Make sure a single p tag is not selected
    if (selectedContainer.tagName === "P") {
      selectedContainer = selectedContainer.parentElement;
    }
  }

  return selectedContainer;
}

function getContentOfArticle() {
  let pageSelectedContainer = getContainer();

  const pattern1 = /<a\b[^>]*>(.*?)<\/a>/gi;
  pageSelectedContainer.innerHTML = DOMPurify.sanitize(pageSelectedContainer.innerHTML.replace(pattern1, ""));
  const pattern2 = new RegExp("<br/?>[ \r\n\s]*<br/?>", "g");
  pageSelectedContainer.innerHTML = DOMPurify.sanitize(pageSelectedContainer.innerHTML.replace(pattern2, "</p><p>"));

  let content = DOMPurify.sanitize(pageSelectedContainer.innerHTML);
  content = html2md(content);
  return content;
}

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
  const text = getSelectionText() || getContentOfArticle();
  if(!text) return window.alert('Please select some text first.');

  const lang = window.prompt("Enter language code (e.g. en):", "en");

  speak(text, lang || 'en');
}

speakSelection();