const container = document.querySelector(".container");

const createGrid = (gridSize) => {
  const totalGrids = gridSize * gridSize;

  for (let i = 0; i < totalGrids; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    const gridPercentage = 100 / gridSize;
    grid.style.flex = `0 0 ${gridPercentage}%`;

    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#000";
    });
  }
};

createGrid(16);
