const container = document.getElementById("container");
const btn1 = document.getElementById("Btn1")

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};
btn1.addEventListener("click", changeSize);
function changeSize() {
  let changeGrid = prompt("Enter desired grid size from 1 to 100");
  let desiredSize = parseInt(changeGrid);
  if (desiredSize > 1 && desiredSize <= 100) {
    makeRows(desiredSize,desiredSize);
  } else {
    alert("Enter a digit from 1-100 range!");
  }
}
