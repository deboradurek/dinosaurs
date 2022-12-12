import { compareMethodsAndFact } from './methods.js';
import { Dino } from './dino.js';
import { generateTile } from './generateElements.js';

const form = document.getElementById('dino-compare');
const grid = document.getElementById('grid');
const restartBtn = document.getElementById('restart-btn');

// Generate all tiles: eight dinos and one human
const generateTiles = async (human) => {
  const dinosData = await fetch('./dino.json').then((res) => res.json());
  const dinos = dinosData.Dinos.map((dino) => new Dino(dino));

  for (let index = 0; index < dinos.length + 1; index++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const shouldPlaceHuman = index === 4;

    if (shouldPlaceHuman) {
      gridItem.innerHTML = generateTile(human.name, 'human');
    } else {
      const idx = index > 4 ? index - 1 : index;
      const dino = dinos[idx];
      const randomIdx = Math.floor(Math.random() * 4);
      const compare = compareMethodsAndFact(dino, human)[randomIdx];
      const fact = dino.species === 'Pigeon' ? dino.fact : compare();

      gridItem.innerHTML = generateTile(dino.species, dino.species, fact);
    }
    grid.appendChild(gridItem);
  }
};

// Handle click function to show dinographic
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Generate human data from input
  const humanDataInput = (function () {
    const height =
      Number(document.getElementById('feet').value) * 12 +
      Number(document.getElementById('inches').value);

    return {
      name: document.getElementById('name').value,
      height,
      weight: document.getElementById('weight').value,
      diet: document.getElementById('diet').value,
    };
  })();

  form.reset();
  form.style.display = 'none';
  grid.style.display = 'flex';

  generateTiles(humanDataInput);

  restartBtn.style.display = 'block';
});

// Hadle click function to allow user to generate a new dinographic
restartBtn.addEventListener('click', () => {
  grid.style.display = 'none';
  grid.innerHTML = '';
  form.style.display = 'block';
  restartBtn.style.display = 'none';
});
