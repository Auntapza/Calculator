let resalt = document.getElementById("resalt")

// clear Screen button
document.getElementById("clear").onclick = () => {
  resalt.value = ''
}

// show on the screen button
function display(val) {
  resalt.value += val
}

// slove
function slove() {
  let y = eval(resalt.value)
  resalt.value = y
}

// delete button
document.getElementById("backspace").onclick = () => {
  let valToString = resalt.value.toString()

  resalt.value = valToString.slice(0, -1)
}