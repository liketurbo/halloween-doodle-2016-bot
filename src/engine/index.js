import handleRunKeys from "./handleRunKeys"

const genAppState = canvasElem => {
  const state = {
    activate: () => {
      state.onActivate()

      state.active = true
    },
    active: false,
    disable: () => {
      state.onDisable()

      state.active = false
    },
    onActivate: () => null,
    onDisable: () => null,
  }

  handleRunKeys(state, canvasElem)

  return state
}

export default genAppState
