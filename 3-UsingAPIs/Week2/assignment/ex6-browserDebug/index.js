/*
Full description at:https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-6-using-the-browser-debugger
*/


async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function addTableRow(table, label, value) {
  const tr = createAndAppend('tr', table);
  createAndAppend('th', tr, { text: label });
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);

  const name = knownName?.en ?? '(unknown)';
  const birthPlace =
    typeof birth?.place?.locationString === 'string'
      ? birth.place.locationString
      : birth?.place?.locationString?.en ?? '—';
  addTableRow(table, 'Name', name);
  addTableRow(table, 'Birth', `${birth?.date ?? '—'}, ${birthPlace}`);

  if (death) {
    const deathPlace =
      typeof death?.place?.locationString === 'string'
        ? death.place.locationString
        : death?.place?.locationString?.en ?? '—';
    addTableRow(table, 'Death', `${death?.date ?? '—'}, ${deathPlace}`);
  }
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  laureates.forEach((laureate) => renderLaureate(ul, laureate));
}

async function fetchAndRender() {
  try {
    const { laureates } = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
