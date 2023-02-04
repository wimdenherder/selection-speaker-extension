export function createBox(html) {
  const box = document.createElement('div');
  box.id = 'selectionSpeaker';
  box.style.position = 'fixed';
  box.style.top = '100px';
  box.style.right = '100px';
  box.style.background = 'white';
  box.style.padding = '10px';
  box.style.borderRadius = '10px';
  box.style.maxHeight = "50vh";
  box.style.overflowY = "scroll";
  box.style.maxWidth = "50vw";
  box.style.zIndex = "666";
  document.body.appendChild(box);
  return box;
}

export function alertToBox(text) {
  const box = document.getElementById('selectionSpeaker') || createBox('');
  box.innerHTML = text;
}

export function deleteBox() {
  const box = document.getElementById('selectionSpeaker');
  if(box) box.remove();
}