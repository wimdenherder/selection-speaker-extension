// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);

async function execScript() {
  const tabId = await getTabId();
  if(!tabId) return;
  chrome.scripting.executeScript({
    target: {tabId},
    files: ['execute.js']
  })
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return tabs[0]?.id;
}
