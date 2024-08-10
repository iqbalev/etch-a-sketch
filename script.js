const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".btn-grid-size");

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

gridSizeButton.addEventListener("click", () => {
  container.innerHTML = "";

  const userGridInput = parseInt(prompt("Enter new grid size (1-100)."));

  if (userGridInput > 100) return alert("Maximum grid size is 100.");

  createGrid(userGridInput);
});
