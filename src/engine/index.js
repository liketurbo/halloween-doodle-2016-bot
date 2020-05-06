import handleRunKeys from "./handleRunKeys"

const genAppState = canvasElem => {
  const state = {
    activate: () => {
      state.onActivate.forEach(fn => fn())

      state.active = true
    },
    active: false,
    disable: () => {
      state.onDisable.forEach(fn => fn())

      state.active = false
    },
    onActivate: [],
    onDisable: [],
  }

  handleRunKeys(state, canvasElem)

  return state
}

export default genAppState
