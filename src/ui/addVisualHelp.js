const addVisualHelp = elem => {
  const tableElem = document.createElement("table")

  tableElem.insertAdjacentHTML(
    "beforeend",
    `
    <tbody>
      <tr>
        <td>Status</td>
        <td style="color:red">Disabled</td>
      </tr>
      <tr>
        <td>Start/Stop AI</td>
        <td>Press Button "1"</td>
      </tr>
    </tbody>
  `
  )

  elem.closest("body").append(tableElem)

  const { top, left } = elem.getBoundingClientRect()

  tableElem.style.fontSize = "5px"
  tableElem.style.fontFamily = "sans-serif"

  tableElem.style.position = "fixed"
  tableElem.style.left = `${left}px`
  tableElem.style.top = `${top}px`

  tableElem.style.background = "white"

  return tableElem
}

export default addVisualHelp
