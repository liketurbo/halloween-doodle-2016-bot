const START_STOP_AI = "Digit1"

const handleRunKeys = (state, canvasElem) => {
  canvasElem.parentElement.addEventListener("keydown", evt => {
    if (evt.code === START_STOP_AI)
      if (state.active) state.disable()
      else state.activate()
  })
}

export default handleRunKeys
