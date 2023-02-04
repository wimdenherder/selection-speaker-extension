# Selection speaker

## Purpose

Reads a page content or the selection on the page. 

## Installation

```
npm install
npm run build
```

this creates a build folder with the extension.   

## Load into chrome

Go to chrome://extensions/  
Click developer modus on (top right)  
Load extension folder build (top left)  

## Usage

The software is equipped with an automatic language detection feature. To translate the text, simply enter a different language code. To run the language learning algorithm, add an exclamation mark (e.g. `en!`) to translate to English. The algorithm will read each sentence in both the original and translated languages, with easier languages like English and Dutch only read once and other languages read twice per sentence. The frequency of reading can be adjusted in the "learn-lang-algo.js" file.

### Very simple version without build

Check out [this early version](https://github.com/wimdenherder/selection-speaker-extension/tree/speak-only-selection-simple-version) that has just a content-script and reads the page

