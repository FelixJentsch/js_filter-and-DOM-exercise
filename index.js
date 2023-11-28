const cities = [
  {
    name: "Berlin",
    language: "German",
    country: "Germany",
    population: 3645000,
  },
  {
    name: "Vienna",
    language: "German",
    country: "Austria",
    population: 1897000,
  },
  { name: "Paris", language: "French", country: "France", population: 2161000 },
  { name: "Rome", language: "Italian", country: "Italy", population: 2873000 },
  {
    name: "Madrid",
    language: "Spanish",
    country: "Spain",
    population: 3223000,
  },
];

// When the user inputs something in the field or changes the slider value,
// show the results in the corresponding <ul> (pay attention to the data-attribute!).

// Important: write the 'getCitiesByLanguage' and 'getCitiesWithMorePopulationThan' functions!

function getCitiesByLanguage(languageInput) {
  const filteredCities = cities.filter(
    (city) => city.language.toLowerCase() === languageInput.value.toLowerCase()
  );
  return filteredCities;
}

function getCitiesWithMorePopulationThan(populationInput) {
  const population = Number(populationInput.value);
  const filteredCities = cities.filter((city) => city.population > population);
  return filteredCities;
}

///////////////////////////////////////////////////////////////////////////////////////////////

const languageInput = document.querySelector('[data-js="input-text"]');
const resultsLanguage = document.querySelector('[data-js="results-language"]');

languageInput.addEventListener("input", () => {
  const filteredCities = getCitiesByLanguage(languageInput);
  updateResults(filteredCities, resultsLanguage);
});

///////////////////////////////////////////////////////////////////////////////////////////////

const populationInput = document.querySelector('[data-js="input-range"]');
const resultsPopulation = document.querySelector(
  '[data-js="results-population"]'
);

populationInput.addEventListener("input", () => {
  const filteredCities = getCitiesWithMorePopulationThan(populationInput);
  updateResults(filteredCities, resultsPopulation);
});

///////////////////////////////////////////////////////////////////////////////////////////////

function updateResults(filteredCities, resultsElement) {
  const resultsHTML = filteredCities
    .map((city) => `<li>${city.name}</li>`)
    .join("");
  resultsElement.innerHTML = resultsHTML;
}
