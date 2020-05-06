const addVisualHelp = elem => {
  const tableElem = document.createElement("table")

  tableElem.insertAdjacentHTML(
    "beforeend",
    `
    <thead>
      <tr>
        <th style="color:red">Disabled</th>
      </tr>
      <tr>
        <th>Button</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>START AI</td>
      </tr>
      <tr>
        <td>2</td>
        <td>STOP AI</td>
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
