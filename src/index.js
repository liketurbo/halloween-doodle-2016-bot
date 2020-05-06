import swipeDown from "./actions/swipeDown"
import swipeRight from "./actions/swipeRight"
import engine from "./engine"
import ui from "./ui"

const canvas = window.frames[0].document.querySelector("canvas")

const uiState = ui(canvas)
const appState = engine(canvas)

appState.onActivate = uiState.activate
appState.onDisable = uiState.disable

const start = () => {
  if (appState.active) {
    swipeDown(canvas)
    swipeRight(canvas)
  }

  setTimeout(start)
}

start()
