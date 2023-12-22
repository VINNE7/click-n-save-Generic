import cssText from "data-text:~/contents/copyButton.css"
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

const copyButton = () => {
  const copyContent = async () => {
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

    navigator.clipboard.writeText(combinedText)
  }

  return (
    <button id="exampleCopyButton" onClick={copyContent}>
      Copy Content
    </button>
  )
}

export default copyButton
