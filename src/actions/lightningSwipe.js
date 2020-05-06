const lightningSwipe = canvasElem => {
  const lightningStr =
    '[{"clientX":269,"clientY":215,"layerX":269,"layerY":149,"offsetX":270,"offsetY":149,"pageX":269,"pageY":215,"screenX":340,"screenY":374,"x":269,"y":215},{"clientX":270,"clientY":216,"layerX":270,"layerY":150,"offsetX":270,"offsetY":151,"pageX":270,"pageY":216,"screenX":340,"screenY":375,"x":270,"y":216},{"clientX":270,"clientY":218,"layerX":270,"layerY":152,"offsetX":270,"offsetY":153,"pageX":270,"pageY":218,"screenX":340,"screenY":377,"x":270,"y":218},{"clientX":270,"clientY":221,"layerX":270,"layerY":155,"offsetX":270,"offsetY":156,"pageX":270,"pageY":221,"screenX":340,"screenY":380,"x":270,"y":221},{"clientX":270,"clientY":231,"layerX":270,"layerY":165,"offsetX":270,"offsetY":166,"pageX":270,"pageY":231,"screenX":340,"screenY":390,"x":270,"y":231},{"clientX":270,"clientY":237,"layerX":270,"layerY":171,"offsetX":270,"offsetY":171,"pageX":270,"pageY":237,"screenX":340,"screenY":396,"x":270,"y":237},{"clientX":270,"clientY":243,"layerX":270,"layerY":177,"offsetX":270,"offsetY":177,"pageX":270,"pageY":243,"screenX":340,"screenY":402,"x":270,"y":243},{"clientX":270,"clientY":247,"layerX":270,"layerY":181,"offsetX":270,"offsetY":181,"pageX":270,"pageY":247,"screenX":340,"screenY":406,"x":270,"y":247},{"clientX":269,"clientY":250,"layerX":269,"layerY":184,"offsetX":270,"offsetY":185,"pageX":269,"pageY":250,"screenX":340,"screenY":409,"x":269,"y":250},{"clientX":269,"clientY":253,"layerX":269,"layerY":187,"offsetX":270,"offsetY":187,"pageX":269,"pageY":253,"screenX":340,"screenY":412,"x":269,"y":253},{"clientX":269,"clientY":255,"layerX":269,"layerY":189,"offsetX":270,"offsetY":189,"pageX":269,"pageY":255,"screenX":340,"screenY":414,"x":269,"y":255},{"clientX":269,"clientY":255,"layerX":269,"layerY":189,"offsetX":270,"offsetY":190,"pageX":269,"pageY":255,"screenX":340,"screenY":414,"x":269,"y":255},{"clientX":269,"clientY":256,"layerX":269,"layerY":190,"offsetX":270,"offsetY":191,"pageX":269,"pageY":256,"screenX":340,"screenY":415,"x":269,"y":256},{"clientX":270,"clientY":256,"layerX":270,"layerY":190,"offsetX":270,"offsetY":191,"pageX":270,"pageY":256,"screenX":340,"screenY":415,"x":270,"y":256},{"clientX":270,"clientY":255,"layerX":270,"layerY":189,"offsetX":270,"offsetY":190,"pageX":270,"pageY":255,"screenX":340,"screenY":414,"x":270,"y":255},{"clientX":272,"clientY":255,"layerX":272,"layerY":189,"offsetX":272,"offsetY":189,"pageX":272,"pageY":255,"screenX":342,"screenY":414,"x":272,"y":255},{"clientX":274,"clientY":254,"layerX":274,"layerY":188,"offsetX":275,"offsetY":189,"pageX":274,"pageY":254,"screenX":345,"screenY":413,"x":274,"y":254},{"clientX":277,"clientY":253,"layerX":277,"layerY":187,"offsetX":278,"offsetY":188,"pageX":277,"pageY":253,"screenX":348,"screenY":412,"x":277,"y":253},{"clientX":280,"clientY":253,"layerX":280,"layerY":187,"offsetX":281,"offsetY":187,"pageX":280,"pageY":253,"screenX":351,"screenY":412,"x":280,"y":253},{"clientX":284,"clientY":252,"layerX":284,"layerY":186,"offsetX":284,"offsetY":187,"pageX":284,"pageY":252,"screenX":354,"screenY":411,"x":284,"y":252},{"clientX":286,"clientY":251,"layerX":286,"layerY":185,"offsetX":286,"offsetY":186,"pageX":286,"pageY":251,"screenX":356,"screenY":410,"x":286,"y":251},{"clientX":287,"clientY":251,"layerX":287,"layerY":185,"offsetX":288,"offsetY":186,"pageX":287,"pageY":251,"screenX":358,"screenY":410,"x":287,"y":251},{"clientX":288,"clientY":251,"layerX":288,"layerY":185,"offsetX":289,"offsetY":186,"pageX":288,"pageY":251,"screenX":359,"screenY":410,"x":288,"y":251},{"clientX":289,"clientY":251,"layerX":289,"layerY":185,"offsetX":290,"offsetY":186,"pageX":289,"pageY":251,"screenX":360,"screenY":410,"x":289,"y":251},{"clientX":289,"clientY":251,"layerX":289,"layerY":185,"offsetX":290,"offsetY":185,"pageX":289,"pageY":251,"screenX":360,"screenY":410,"x":289,"y":251},{"clientX":290,"clientY":251,"layerX":290,"layerY":185,"offsetX":290,"offsetY":185,"pageX":290,"pageY":251,"screenX":360,"screenY":410,"x":290,"y":251},{"clientX":294,"clientY":251,"layerX":294,"layerY":185,"offsetX":295,"offsetY":185,"pageX":294,"pageY":251,"screenX":365,"screenY":410,"x":294,"y":251},{"clientX":296,"clientY":250,"layerX":296,"layerY":184,"offsetX":297,"offsetY":185,"pageX":296,"pageY":250,"screenX":367,"screenY":409,"x":296,"y":250},{"clientX":301,"clientY":248,"layerX":301,"layerY":182,"offsetX":302,"offsetY":183,"pageX":301,"pageY":248,"screenX":372,"screenY":407,"x":301,"y":248},{"clientX":301,"clientY":247,"layerX":301,"layerY":181,"offsetX":302,"offsetY":182,"pageX":301,"pageY":247,"screenX":372,"screenY":406,"x":301,"y":247},{"clientX":300,"clientY":247,"layerX":300,"layerY":181,"offsetX":301,"offsetY":182,"pageX":300,"pageY":247,"screenX":371,"screenY":406,"x":300,"y":247},{"clientX":300,"clientY":248,"layerX":300,"layerY":182,"offsetX":300,"offsetY":183,"pageX":300,"pageY":248,"screenX":370,"screenY":407,"x":300,"y":248},{"clientX":299,"clientY":249,"layerX":299,"layerY":183,"offsetX":300,"offsetY":183,"pageX":299,"pageY":249,"screenX":370,"screenY":408,"x":299,"y":249},{"clientX":299,"clientY":249,"layerX":299,"layerY":183,"offsetX":300,"offsetY":184,"pageX":299,"pageY":249,"screenX":370,"screenY":408,"x":299,"y":249},{"clientX":298,"clientY":254,"layerX":298,"layerY":188,"offsetX":299,"offsetY":189,"pageX":298,"pageY":254,"screenX":369,"screenY":413,"x":298,"y":254},{"clientX":298,"clientY":256,"layerX":298,"layerY":190,"offsetX":299,"offsetY":191,"pageX":298,"pageY":256,"screenX":369,"screenY":415,"x":298,"y":256},{"clientX":298,"clientY":261,"layerX":298,"layerY":195,"offsetX":299,"offsetY":195,"pageX":298,"pageY":261,"screenX":369,"screenY":420,"x":298,"y":261},{"clientX":298,"clientY":263,"layerX":298,"layerY":197,"offsetX":299,"offsetY":198,"pageX":298,"pageY":263,"screenX":369,"screenY":422,"x":298,"y":263},{"clientX":298,"clientY":265,"layerX":298,"layerY":199,"offsetX":299,"offsetY":200,"pageX":298,"pageY":265,"screenX":369,"screenY":424,"x":298,"y":265},{"clientX":298,"clientY":267,"layerX":298,"layerY":201,"offsetX":299,"offsetY":201,"pageX":298,"pageY":267,"screenX":369,"screenY":426,"x":298,"y":267},{"clientX":298,"clientY":267,"layerX":298,"layerY":201,"offsetX":299,"offsetY":202,"pageX":298,"pageY":267,"screenX":369,"screenY":426,"x":298,"y":267},{"clientX":298,"clientY":268,"layerX":298,"layerY":202,"offsetX":299,"offsetY":203,"pageX":298,"pageY":268,"screenX":369,"screenY":427,"x":298,"y":268},{"clientX":298,"clientY":269,"layerX":298,"layerY":203,"offsetX":299,"offsetY":203,"pageX":298,"pageY":269,"screenX":369,"screenY":428,"x":298,"y":269},{"clientX":298,"clientY":269,"layerX":298,"layerY":203,"offsetX":299,"offsetY":204,"pageX":298,"pageY":269,"screenX":369,"screenY":428,"x":298,"y":269},{"clientX":298,"clientY":270,"layerX":298,"layerY":204,"offsetX":299,"offsetY":205,"pageX":298,"pageY":270,"screenX":369,"screenY":429,"x":298,"y":270},{"clientX":299,"clientY":271,"layerX":299,"layerY":205,"offsetX":300,"offsetY":205,"pageX":299,"pageY":271,"screenX":370,"screenY":430,"x":299,"y":271},{"clientX":299,"clientY":271,"layerX":299,"layerY":205,"offsetX":300,"offsetY":206,"pageX":299,"pageY":271,"screenX":370,"screenY":430,"x":299,"y":271},{"clientX":299,"clientY":272,"layerX":299,"layerY":206,"offsetX":300,"offsetY":207,"pageX":299,"pageY":272,"screenX":370,"screenY":431,"x":299,"y":272},{"clientX":300,"clientY":273,"layerX":300,"layerY":207,"offsetX":300,"offsetY":207,"pageX":300,"pageY":273,"screenX":370,"screenY":432,"x":300,"y":273},{"clientX":300,"clientY":273,"layerX":300,"layerY":207,"offsetX":300,"offsetY":208,"pageX":300,"pageY":273,"screenX":370,"screenY":432,"x":300,"y":273},{"clientX":300,"clientY":273,"layerX":300,"layerY":207,"offsetX":300,"offsetY":208,"pageX":300,"pageY":273,"screenX":370,"screenY":432,"x":300,"y":273}]'

  const lightningEvs = JSON.parse(lightningStr)

  lightningEvs.forEach((evtObj, evtIdx) => {
    if (evtIdx === 0)
      canvasElem.dispatchEvent(new MouseEvent("mousedown", evtObj))
    else if (evtIdx === lightningEvs.length - 1)
      canvasElem.dispatchEvent(new MouseEvent("mouseup", evtObj))
    else canvasElem.dispatchEvent(new MouseEvent("mousemove", evtObj))
  })
}

export default lightningSwipe
