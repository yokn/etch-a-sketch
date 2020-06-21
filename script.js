// TODO: Be careful with borders and margins, they can adjust the size of the squares!
// TODO: Find a way to clear the grid

let gridSize = 16;

const body = document.querySelector('body');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Grid';
clearButton.style['margin-bottom'] = '1em';
clearButton.style['margin-right'] = '1em';
body.appendChild(clearButton);

const form = document.createElement('form');
body.appendChild(form);

const gridSizeEntry = document.createElement('input');
gridSizeEntry.setAttribute('type', 'number');
gridSizeEntry.name = 'gridSizeEntry';
form.appendChild(gridSizeEntry);

const gridSizeEntrySubmit = document.createElement('input');
gridSizeEntrySubmit.setAttribute('type', 'submit');
form.appendChild(gridSizeEntrySubmit);

function main() {
        const container = document.createElement('div');
        container.className = 'container';
        container.style.display = 'grid';
        container.style['grid-template-rows'] = `repeat(${gridSize},1fr)`;
        container.style['grid-template-columns'] = `repeat(${gridSize},1fr)`;
        body.appendChild(container);

        for (let i = 1; i <= gridSize * gridSize; i += 1) {
                const newDiv = document.createElement('div');
                newDiv.textContent = `div ${i}`;
                newDiv.className = 'newDiv';
                container.appendChild(newDiv);
                newDiv.addEventListener('mouseover', () => {
                        newDiv.style['background-color'] = 'black';
                });
                clearButton.addEventListener('click', () => {
                        newDiv.style['background-color'] = 'white';
                });
        }
}

form.onsubmit = e => {
        e.preventDefault();
        gridSize = form.gridSizeEntry.value;

        main();
};
