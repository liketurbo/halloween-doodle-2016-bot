const swipeUpTriangle = canvasElem => {
  const { x, y, width, height } = canvasElem.getBoundingClientRect()

  let posX = x + width / 2
  let posY = y + height / 2

  const downEvent = new MouseEvent("mousedown", {
    clientX: posX,
    clientY: posY,
  })

  const amp = 20

  const genMoveEvent = (xPar, yPar) =>
    new MouseEvent("mousemove", {
      clientX: (posX += amp * xPar),
      clientY: (posY += amp * yPar),
    })

  const upEvent = new MouseEvent("mouseup", {
    clientX: posX,
    clientY: posY,
  })

  canvasElem.dispatchEvent(downEvent)

  for (let i = 0; i < 1; i += 0.1) canvasElem.dispatchEvent(genMoveEvent(i, -i))

  for (let i = 0; i < 1; i += 0.1) canvasElem.dispatchEvent(genMoveEvent(i, i))

  canvasElem.dispatchEvent(upEvent)
}

export default swipeUpTriangle
