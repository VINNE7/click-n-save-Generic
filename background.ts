// This piece code creates a context menu when the extension is installed.
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "downloadTxt",
    title: "Download as txt file",
    contexts: ["selection"]
  })
})

// When a context menu is clicked, it checks if it's the "Download as txt" option. If true, it then
// sends a message to the tab to be used by the content scripts.
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "downloadTxt") {
    chrome.tabs.sendMessage(tab.id, { action: "downloadTxt" })
  }
})
// Upon a message is received, it checks for a "sendTextInfo" action, coming from the content scripts. This message
// contains all the necessary information to download a text, using a Blob object, FileReader and a download function
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "sendTextInfo") {
    const blob = new Blob([message.selectedText], { type: "text/plain" })
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64data = reader.result as string
      downloadTextFile(base64data, message.filename)
    }
    reader.readAsDataURL(blob)
  }
})
// A function that uses the chrome.downloads api to download text, it receives the text as base64data and the filename as string.
function downloadTextFile(base64data: string, filename: string) {
  chrome.downloads.download({
    url: base64data,
    filename: `${filename}.txt`
  })
}
