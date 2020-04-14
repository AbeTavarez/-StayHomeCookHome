// console.log('Running Scripts...')

//* Constants
const DOMAIN = 'https://www.themealdb.com/api/json/v1/';
const API_KEY = 1;
const BASE_URL = `${DOMAIN}${API_KEY}/search.php?s=`;
const SearchByFirstLetter_BASE_URL = `${DOMAIN}${API_KEY}/search.php?f=`;
const GET_RANDOM_MEAL_BASE_URL = `${DOMAIN}${API_KEY}/random.php`;
const SearchByID_BASE_URL = `${DOMAIN}${API_KEY}/lookup.php?i=`;

//* DOM Variables
const randomMealDIV = document.getElementById('random-div');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

//* Gets random meal from DB
async function getRandomMealData() {
  try {
    //randomMeal obj of random meal
    let randomMeal = await axios.get(`${GET_RANDOM_MEAL_BASE_URL}`);
    // console.log('data---->', randomMeal)
    const meal = randomMeal.data.meals[0];
    // console.log('meal--->', meal.strMeal);
    renderRandomMeal(meal)
  } catch (error) {
    console.error(error)
  };
};
getRandomMealData();

//* Render the random meal to top of the page
function renderRandomMeal(meal) {
  randomMealDIV.innerHTML = '';
  //Meal variables
  const imgURL = meal.strMealThumb;
  const mealName = meal.strMeal;
  //HTML Elements
  const h3 = document.createElement('h2');
  const img = document.createElement('img');
  //setting attributes
  h3.innerText = mealName;
  // para.setAttribute('class', 'random-h ')
  img.setAttribute('src', imgURL);
  img.setAttribute('class', 'display-random')
  //appending to the dom
  randomMealDIV.appendChild(h3);
  randomMealDIV.appendChild(img);
};

//* Event Handlers for search meals
async function searchMeal(value) {
  //Check for value
  if (searchInput.value === 'undefined') {
    console.log('search input is empty dont do anything')
  } else {
    value = searchInput.value
  }
  //Get Request
  try {
    let result = await axios.get(`${BASE_URL}${value}`);
    renderResults(result);
    searchInput.value = '';
  } catch (error) {
    console.error(error);
  };

};

//* Renders Search Results
function renderResults(result) {
  //Data
  let meal = result.data.meals;

  for (let x = 0; x < meal.length; x++) {
    console.log(meal[x])
    // Main DIV
    let resultsDiv = document.getElementById('search-results');
    resultsDiv.setAttribute('class', 'result');
    if (result.data.meals == null) {
      console.log('No Matches')
      const h2NoResult = document.createElement('h2');
      h2NoResult.innerHTML = 'No matches';
      resultsDiv.appendChild(h2NoResult);
    };
    ////////////////////////////////
    // Meal title
    let h2MealName = document.createElement('h1');
    h2MealName.innerHTML = meal[x].strMeal;
    resultsDiv.appendChild(h2MealName);

    let videoURL = meal[x].strYoutube;
    let link = document.createElement('a');
    link.setAttribute('href', videoURL);
    link.innerHTML = 'watch video';
    resultsDiv.appendChild(link)
    //create append img
    let img = document.createElement('img');
    let imgURL = meal[x].strMealThumb; //here
    img.setAttribute('src', imgURL);
    img.setAttribute('class', 'result');
    resultsDiv.appendChild(img);
    // UL Display Ingredients and Measuments
    let ulResult = document.createElement('ul');
    resultsDiv.appendChild(ulResult);
    //H2 to display Ingredients
    let h2Ingredients = document.createElement('h2');
    h2Ingredients.innerHTML = 'Ingredients';
    ulResult.appendChild(h2Ingredients);
    // Built Object
    //Loops on ingredients creates lis appends them to ul
    for (i in meal[x]) { //here
      if (i.includes("Ing") && meal[x][i] != "" && meal[x][i] != " ") {
        let li = document.createElement('li');
        li.innerHTML = meal[x][i];
        ulResult.appendChild(li)
      };
    };
    //Creates H2 to display Measurements
    let h2Meas = document.createElement('h2');
    h2Meas.innerHTML = 'Measurements';
    //apends it to ul
    ulResult.appendChild(h2Meas);
    for (m in meal[x]) {
      if (m.includes("Meas") && meal[x][m] != "" && meal[x][m] != " ") {
        let li = document.createElement('li');
        li.innerHTML = meal[x][m];
        ulResult.appendChild(li);
      };
    };
  }
}
//* SEARCH BAR
searchButton.addEventListener('click', searchMeal);