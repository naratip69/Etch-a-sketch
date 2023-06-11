
function createGrid( size = 16){
    const container = document.querySelector("#container");
    const grid = document.createElement("div");
    grid.style.cssText = `padding:${size};margin:0;border:0;`;
    grid.classList.add("paper");
    container.appendChild(grid);
}
