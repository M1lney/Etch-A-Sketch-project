const buttonRes = document.querySelector('#resolution');
buttonRes.addEventListener('click', (e) => {
    let choice = prompt("Enter ")
})

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
        console.log(e);

    })
})