import engine from "./engine"
import swipe from "./swipe"
import ui from "./ui"

const canvas = window.frames[0].document.querySelector("canvas")

const uiState = ui(canvas)
const appState = engine(canvas)

appState.onActivate.push(uiState.activate)
appState.onDisable.push(uiState.disable)

const swipeTo = swipe(canvas)

const start = () => {
  if (appState.active) {
    swipeTo("down")
    swipeTo("right")
    swipeTo("upTriangle")
    swipeTo("downTriangle")
    swipeTo("lightning")
  }

  setTimeout(start)
}

start()
