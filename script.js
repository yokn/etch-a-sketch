const gridSize = 16;

const container = document.querySelector('.container');
container.style.display = 'grid';
container.style['grid-template-rows'] = `repeat(${gridSize},1fr)`;
container.style['grid-template-columns'] = `repeat(${gridSize},1fr)`;

for (let i = 1; i <= gridSize * gridSize; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `div ${i}`;
        newDiv.className = 'newDiv';
        container.appendChild(newDiv);
}
