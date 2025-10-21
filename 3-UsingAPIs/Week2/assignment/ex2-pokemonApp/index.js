/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

function createUI() {
  const app = document.getElementById('app') || document.body;

  const title = document.createElement('h1');
  title.textContent = 'Pokémon App';

  const statusEl = document.createElement('p');
  statusEl.id = 'status';
  statusEl.textContent = 'Click "Load Pokémons" to start.';

  const loadBtn = document.createElement('button');
  loadBtn.id = 'load-btn';
  loadBtn.textContent = 'Load Pokémons';

  const selectEl = document.createElement('select');
  selectEl.id = 'pokemon-select';
  selectEl.disabled = true;
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- choose a Pokémon --';
  selectEl.appendChild(placeholder);

  const imgEl = document.createElement('img');
  imgEl.id = 'pokemon-image';
  imgEl.alt = 'Selected Pokémon';
  imgEl.style.maxWidth = '200px';
  imgEl.style.display = 'block';
  imgEl.style.marginTop = '12px';

  app.append(title, statusEl, loadBtn, selectEl, imgEl);
  return { loadBtn, selectEl, imgEl, statusEl };
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

function capitalize(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

async function fetchAndPopulatePokemons(apiUrl, selectEl) {
  const data = await fetchData(apiUrl);
  selectEl.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- choose a Pokémon --';
  selectEl.appendChild(placeholder);

  data.results.forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p.url;
    opt.textContent = capitalize(p.name);
    selectEl.appendChild(opt);
  });

  selectEl.disabled = false;
}

async function fetchImage(detailsUrl, imgEl) {
  const pokemon = await fetchData(detailsUrl);
  const sprite = pokemon?.sprites?.front_default || '';
  imgEl.src = sprite;
  imgEl.alt = capitalize(pokemon.name || 'Pokémon');
}

async function main() {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  const { loadBtn, selectEl, imgEl, statusEl } = createUI();

  loadBtn.addEventListener('click', async () => {
    loadBtn.disabled = true;
    statusEl.textContent = 'Loading pokémons...';
    try {
      await fetchAndPopulatePokemons(API_URL, selectEl);
      statusEl.textContent = 'Choose a Pokémon from the list.';
    } catch (err) {
      statusEl.textContent = `Error: ${err.message}`;
    } finally {
      loadBtn.disabled = false;
    }
  });

  selectEl.addEventListener('change', async (e) => {
    const url = e.target.value;
    if (!url) return;
    statusEl.textContent = 'Loading Pokémon details...';
    try {
      await fetchImage(url, imgEl);
      statusEl.textContent = 'Loaded!';
    } catch (err) {
      statusEl.textContent = `Error: ${err.message}`;
    }
  });
}

window.addEventListener('load', main);
