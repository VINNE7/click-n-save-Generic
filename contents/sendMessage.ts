import type { PlasmoCSConfig } from "plasmo"

// Plasmo's abstraction of the content scripts urls, all of the items in the array will be read and inserted
// in the extension's manifest.json
export const config: PlasmoCSConfig = {
  matches: ["https://url-example.org/"]
}
// A simple content scripts that reads a message coming from the background service worker, stores the selected text
// inside a constant, selects the exam Id, and sends the message back again to the background service worker.
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "downloadTxt") {
    const selectedText = window.getSelection().toString()

    const filenameElement = document.querySelector(
      "#elementSelectorExample"
    ) as HTMLInputElement
    const filename = filenameElement.value

    chrome.runtime.sendMessage({
      action: "sendTextInfo",
      selectedText: selectedText,
      filename
    })
  }
})
