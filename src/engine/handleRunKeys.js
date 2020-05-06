const START_AI_CODE = "Digit1"
const STOP_AI_CODE = "Digit2"

const handleRunKeys = (state, canvasElem) => {
  canvasElem.parentElement.addEventListener("keydown", evt => {
    switch (evt.code) {
      case START_AI_CODE:
        state.activate()

        break
      case STOP_AI_CODE:
        state.disable()

        break
    }
  })
}

export default handleRunKeys
