import cssText from "data-text:~/contents/downloadButton.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://url-example.org/"]
}

const anchorSelector = "#selectorExample"

// Plasmo's abstraction of an Anchor Element, used to render the component defined in this file, inline with the anchor
export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector(anchorSelector)

// Plasmo's abstraction to insert style in the shadow dom, as it renders components in the page inside shadow doms by default.
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const CustomButton = () => {
  const sendTextInfo = async () => {
    const filenameElement = document.querySelector(
      "#elementSelectorExample"
    ) as HTMLInputElement
    const filename = filenameElement.value

    const anchor = await getInlineAnchor()
    if (!anchor) return

    const childrenArray = Array.from(
      anchor.querySelectorAll(".childrenSelectorExample")
    )

    childrenArray.pop()

    const childrenTextArray = childrenArray.map(
      (element) => element.textContent
    )

    const combinedText = childrenTextArray.join(" ")

    chrome.runtime.sendMessage({
      action: "sendTextInfo",
      selectedText: combinedText,
      filename
    })
  }

  return (
    <button id="exampleDownloadButton" onClick={sendTextInfo}>
      Download content as txt
    </button>
  )
}

export default CustomButton
