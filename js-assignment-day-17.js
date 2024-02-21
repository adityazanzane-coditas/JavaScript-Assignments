// Assignment - 17 (Promises)

const countriesAPI = "https://restcountries.com/v2/all";

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesApiData = fetch(countriesAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((country) => {
      console.log("Name: ", country.name);
      console.log("Capital: ", country.capital);
      console.log("Languages: ");
      country.languages.forEach((lang) => console.log(`   ${lang.name}`));
      console.log("Population: ", country.population);
      console.log("Area: ", Math.round(country.area / 10000));
    });
  });

// Print out all the cat names in to catNames variable.
// const catsAPI = "https://api.thecatapi.com/v1/breeds";

// const catsName = new Promise((resolve, reject) => {
//   fetch(catsAPI)
//     .then((data) => resolve(data))
//     .catch((error) => reject(error));
// });

// catsName
//   .then((data) => {
//     const cats = data.map(({ name }) => name);
//     return cats;
//   })
//   .catch((error) => {
//     console.log("Failed to fetch countries:", error);
//   });

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const largestCountries = data
      .filter((country) => country.area)
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);
    console.log("Largest countries are", largestCountries);
  })
  .catch((error) => {
    console.error("Error in data fetching", error);
  });

// Read the countries api and count total number of languages in the world used as officials.
