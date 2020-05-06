const genState = tableElem => {
  const firstRow = tableElem.querySelector("tr")

  const state = {
    activate: () => {
      state.active = true

      firstRow.textContent = "Active"
      firstRow.style.color = "green"
    },
    active: false,
    disable: () => {
      state.active = false

      firstRow.textContent = "Disabled"
      firstRow.style.color = "red"
    },
  }

  return state
}

export default genState
