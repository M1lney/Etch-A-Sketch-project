
let res, cellHeight, cellWidth;
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value + "x" + slider.value;
slider.oninput = function() {
    let value = slider.value;
    output.innerHTML = value + "x" + value;
    res = value * value;
    console.log(res);
    cellHeight = 500/value;
    cellWidth = cellHeight;

}




container = document.querySelector('.container');
for (let i = 0; i < (50*50); i++) {
    const square = document.createElement('div');
    square.classList.add('squares');
    container.appendChild(square);
}
console.log(container);

const cells = document.querySelectorAll('.squares');
cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
         e.target.classList.add('hoverClass');
       

    })
})

