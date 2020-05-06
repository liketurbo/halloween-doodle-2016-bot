import addVisualHelp from "./addVisualHelp"
import getUiState from "./genUiState"

const ui = canvasElem => {
  const tableElem = addVisualHelp(canvasElem)

  const uiState = getUiState(tableElem)

  return uiState
}

export default ui
