import handleRunKeys from "./handleRunKeys"

const genAppState = () => {
  const state = {
    activate: () => {
      state.active = true
    },
    active: false,
    disable: () => {
      state.active = false
    },
  }

  handleRunKeys(state)

  return state
}

export default genAppState
