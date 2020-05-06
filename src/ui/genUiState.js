const genState = tableElem => {
  const statusRow = tableElem.rows[0].cells[1]

  const state = {
    activate: () => {
      statusRow.textContent = "Active"
      statusRow.style.color = "green"
    },
    disable: () => {
      statusRow.textContent = "Disabled"
      statusRow.style.color = "red"
    },
  }

  return state
}

export default genState
