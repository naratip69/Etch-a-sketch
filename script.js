
function createGrid( size = 16){
    const container = document.querySelector("#container");
    for(let i=0;i<size;i++){
        const line = document.createElement("div");
        line.classList.add("line");
        for( let j=0;j<size;j++){
            const grid = document.createElement("div");
            grid.style.cssText = `padding:2px;margin:0;border:0;`;
            grid.classList.add("paper");
            line.appendChild(grid);
        }
        container.appendChild(line);
    }
}
