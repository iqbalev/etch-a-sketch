const container = document.querySelector(".container.right");
const gridSizeButton = document.querySelector(".btn-grid-size");
const whitePenButton = document.querySelector(".btn-white-pen");
const rainbowPenButton = document.querySelector(".btn-rainbow-pen");
const eraserButton = document.querySelector(".btn-eraser");

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

const startDrawing = (selectedPen) => {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
      e.target.style.backgroundColor = selectedPen();
    }
  });
};

const removePreviousGrid = () => (container.innerHTML = "");
const getWhiteColor = () => "#fff";
const getRandomColor = () => {
  const redColorValue = Math.floor(Math.random() * 256);
  const greenColorValue = Math.floor(Math.random() * 256);
  const blueColorValue = Math.floor(Math.random() * 256);

  return `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;
};

const eraseDrawing = () => {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
      e.target.style.backgroundColor = "transparent";
    }
  });
};

gridSizeButton.addEventListener("click", () => createCustomGridSize());
whitePenButton.addEventListener("click", () => startDrawing(getWhiteColor));
rainbowPenButton.addEventListener("click", () => startDrawing(getRandomColor));
eraserButton.addEventListener("click", () => eraseDrawing());

createGrid(64);
