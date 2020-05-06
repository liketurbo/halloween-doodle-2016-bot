const swipeRight = canvasElem => {
  const { x, y, width, height } = canvasElem.getBoundingClientRect()

  const cenX = x + width / 2
  const cenY = y + height / 2

  const downEvent = new MouseEvent("mousedown", {
    clientX: cenX,
    clientY: cenY,
  })

  const amp = 50

  const genMoveEvent = par =>
    new MouseEvent("mousemove", {
      clientX: cenX + amp * par,
      clientY: cenY,
    })

  const upEvent = new MouseEvent("mouseup", {
    clientX: cenX + amp,
    clientY: cenY,
  })

  canvasElem.dispatchEvent(downEvent)

  for (let i = 0; i < 1; i += 0.2) canvasElem.dispatchEvent(genMoveEvent(i))

  canvasElem.dispatchEvent(upEvent)
}

export default swipeRight
