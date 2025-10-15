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
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons(apiUrl, selectEl) {
  try {
    const data = await fetchData(apiUrl);
    const pokemons = data.results;

    pokemons.forEach(pokemon => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      selectEl.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(detailsUrl, imgEl) {
  try {
    const data = await fetchData(detailsUrl);
    imgEl.src = data.sprites.front_default;
    imgEl.alt = data.name;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const selectEl = document.querySelector('#pokemon-select');
  const imgEl = document.querySelector('#pokemon-image');
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  try {
    await fetchAndPopulatePokemons(apiUrl, selectEl);
    selectEl.addEventListener('change', async e => {
      const detailsUrl = e.target.value;
      if (detailsUrl) {
        await fetchImage(detailsUrl, imgEl);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);

