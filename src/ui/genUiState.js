const genState = tableElem => {
  const firstRow = tableElem.querySelector("tr")

  const state = {
    activate: () => {
      firstRow.textContent = "Active"
      firstRow.style.color = "green"
    },
    disable: () => {
      firstRow.textContent = "Disabled"
      firstRow.style.color = "red"
    },
  }

  return state
}

export default genState
