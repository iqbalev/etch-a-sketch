const container = document.querySelector(".container.right");
const gridSizeButton = document.querySelector(".btn-grid-size");
const toggleBorderButton = document.querySelector(".btn-toggle-border");
const blackPenButton = document.querySelector(".btn-black-pen");
const rainbowPenButton = document.querySelector(".btn-rainbow-pen");
const customPenButton = document.querySelector(".btn-custom-pen");
const colorPickerInput = document.querySelector(".input-color-picker");
const eraserButton = document.querySelector(".btn-eraser");
const clearButton = document.querySelector(".btn-clear");

const createGrid = (gridSize) => {
  const totalGrids = gridSize * gridSize;

  for (let i = 0; i < totalGrids; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    const gridPercentage = 100 / gridSize;
    grid.style.flex = `0 0 ${gridPercentage}%`;

    container.appendChild(grid);
  }
};

const createCustomGridSize = () => {
  const userGridInput = prompt("Enter new grid size (1-100).");

  if (userGridInput === null) return;

  if (isNaN(userGridInput) || userGridInput === "") {
    alert("Please enter a valid input.");
    return;
  }
  const gridSize = parseInt(userGridInput);

  if (gridSize < 1 || gridSize > 100) {
    alert("Grid size must be between 1-100.");
    return;
  }

  removePreviousGrid();
  createGrid(userGridInput);
};

const toggleBorder = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.classList.toggle("grid-border");
  });
};

const startDrawing = (selectedPen) => {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
      e.target.style.backgroundColor = selectedPen();
    }
  });
};

const removePreviousGrid = () => (container.innerHTML = "");
const getBlackColor = () => "rgb(0, 0 ,0)";
const getRandomColor = () => {
  const redColorValue = Math.floor(Math.random() * 256);
  const greenColorValue = Math.floor(Math.random() * 256);
  const blueColorValue = Math.floor(Math.random() * 256);

  return `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;
};

const showColorPicker = () => {
  colorPickerInput.click();
};

const getCustomColor = () => {
  const selectedColor = colorPickerInput.value;
  return selectedColor;
};

const eraseDrawing = () => {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
      e.target.style.backgroundColor = "transparent";
    }
  });
};

const clearDrawing = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.style.backgroundColor = "transparent";
  });
};

gridSizeButton.addEventListener("click", () => createCustomGridSize());
toggleBorderButton.addEventListener("click", () => toggleBorder());
blackPenButton.addEventListener("click", () => startDrawing(getBlackColor));
rainbowPenButton.addEventListener("click", () => startDrawing(getRandomColor));
customPenButton.addEventListener("click", () => showColorPicker());
colorPickerInput.addEventListener("input", () => startDrawing(getCustomColor));
eraserButton.addEventListener("click", () => eraseDrawing());
clearButton.addEventListener("click", () => clearDrawing());

createGrid(64);
