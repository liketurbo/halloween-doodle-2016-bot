import down from "./down"
import downTriangle from "./downTriangle"
import lightning from "./lightning"
import right from "./right"
import upTriangle from "./upTriangle"

const swipe = canvasElem => {
  return dir => {
    let events = null

    switch (dir) {
      case "down":
        events = down

        break
      case "right":
        events = right

        break
      case "downTriangle":
        events = downTriangle

        break
      case "upTriangle":
        events = upTriangle

        break
      case "lightning":
        events = lightning

        break
      default:
        throw new Error("Used unknown swipe type")
    }

    events.forEach((event, idx) => {
      if (idx === 0)
        canvasElem.dispatchEvent(new MouseEvent("mousedown", event))
      else if (idx === events.length - 1)
        canvasElem.dispatchEvent(new MouseEvent("mouseup", event))
      else canvasElem.dispatchEvent(new MouseEvent("mousemove", event))
    })
  }
}

export default swipe
