// TODO: Be careful with borders and margins, they can adjust the size of the squares!

let gridSize = 16;

const body = document.querySelector('body');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Grid';
clearButton.style['margin-bottom'] = '5px';
clearButton.style['margin-right'] = '1em';
clearButton.style['margin-left'] = '5px';
body.appendChild(clearButton);

const form = document.createElement('form');
form.className = 'form';
body.appendChild(form);

const gridSizeEntry = document.createElement('input');
gridSizeEntry.setAttribute('type', 'number');
gridSizeEntry.name = 'gridSizeEntry';
form.appendChild(gridSizeEntry);

const gridSizeEntrySubmit = document.createElement('input');
gridSizeEntrySubmit.setAttribute('type', 'submit');
gridSizeEntrySubmit.setAttribute('value', 'New Grid');
form.appendChild(gridSizeEntrySubmit);

const container = document.createElement('div');
container.className = 'container';
container.style.display = 'grid';
container.style['margin-top'] = '5px';
body.appendChild(container);

function main() {
        container.style['grid-template-rows'] = `repeat(${gridSize},1fr)`;
        container.style['grid-template-columns'] = `repeat(${gridSize},1fr)`;

        for (let i = 1; i <= gridSize * gridSize; i += 1) {
                const newDiv = document.createElement('div');
                newDiv.className = 'newDiv';
                newDiv.textContent = 'div';
                const textSize = 350 / gridSize;
                newDiv.style['font-size'] = `${textSize}px`;
                container.appendChild(newDiv);
                newDiv.addEventListener('mouseover', () => {
                        newDiv.style['background-color'] = 'black';
                });
                clearButton.addEventListener('click', () => {
                        newDiv.style['background-color'] = 'rgb(243, 226, 204)';
                });
        }
}

form.onsubmit = e => {
        e.preventDefault();
        gridSize = form.gridSizeEntry.value;
        container.innerHTML = ''; // I saw this from someone else
        main();
};

main();
