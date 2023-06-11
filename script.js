
function changeColor(e){
    this.style.cssText += "background-color:black";
}

function createGrid( size = 16){
    const container = document.querySelector("#container");
    for(let i=0;i<size;i++){
        const line = document.createElement("div");
        line.classList.add("line");
        for( let j=0;j<size;j++){
            const grid = document.createElement("div");
            grid.style.cssText = `margin:0;border:0;`;
            grid.classList.add("paper");
            grid.addEventListener("mouseenter",changeColor);
            line.appendChild(grid);
        }
        container.appendChild(line);
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    let size = + prompt("Enter Size of Grid (Max is 100)",0);
    if(typeof(size) !== "number"){
        alert("Invalid Size");
        return;
    }
    size = (size>100)?100:size;
    const body = document.querySelector("body");
    const container = document.querySelector("#container");
    body.removeChild(container);
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id","container");
    body.appendChild(newContainer);
    createGrid(size);
})

