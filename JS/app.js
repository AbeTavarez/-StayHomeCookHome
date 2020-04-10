console.log('Running Scripts...')

//Constants
const DOMAIN = 'https://www.themealdb.com/api/json/v1/';
const API_KEY = 1;
const BASE_URL = `${DOMAIN}${API_KEY}/search.php?s=`;
const SearchByFirstLetter_BASE_URL = `${DOMAIN}${API_KEY}/search.php?f=`;
const GET_RANDOM_MEAL_BASE_URL = `${DOMAIN}${API_KEY}/random.php`;
const SearchByID_BASE_URL = `${DOMAIN}${API_KEY}/lookup.php?i=`;

//by meal
// 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
//by first letter
//https://www.themealdb.com/api/json/v1/1/search.php?f=a
//by id
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
//get random
//https://www.themealdb.com/api/json/v1/1/random.php


//*DOM Variables

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
// setInterval(getRandomMealData, 2000);

//* Render the random meal to top of the page
function renderRandomMeal(meal) {
  randomMealDIV.innerHTML = '';
  // console.log(randomMeal.data.meals['0'].strMeal)
  // console.log('Here --->', randomMeal.data.meals['0'].strMealThumb)

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
// renderRandomMeal(randomMealsArray);

//! Event Listener and handler
function showMealDetails() {

}
randomMealDIV.addEventListener('click', showMealDetails);


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
    // console.log('Result Data --->', result);
    // console.log('here--->', result.data.meals[0].strIngredient1)

    renderResults(result);
    searchInput.value = '';
  } catch (error) {
    console.error(error);
  };

};

//* Renders Search Results
function renderResults(result) {
  //Data
  let meal = result.data.meals[0];

  //Main DIV
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.setAttribute('class', 'result');
  resultsDiv.innerHTML = '';
  if (result.data.meals == null) {
    console.log('No Matches')
    const h2NoResult = document.createElement('h2');
    h2NoResult.innerHTML = 'No matches';
    resultsDiv.appendChild(h2NoResult);
  };
  ////////////////////////////////
  // Meal title
  const h2MealName = document.createElement('h1');
  h2MealName.innerHTML = result.data.meals[0].strMeal;
  resultsDiv.appendChild(h2MealName);
  //create append img
  let img = document.createElement('img');
  let imgURL = meal.strMealThumb;
  img.setAttribute('src', imgURL);
  img.setAttribute('class', 'result img');
  resultsDiv.appendChild(img);





  // UL Display Ingredients and Measuments
  const ulResult = document.createElement('ul');
  resultsDiv.appendChild(ulResult);
  //H2 to display Ingredients
  const h2Ingredients = document.createElement('h2');
  h2Ingredients.innerHTML = 'Ingredients';
  ulResult.appendChild(h2Ingredients);

  //Built Object
  let ingArr = [];
  let measArr = [];
  let ingMeasObjArr = [];
  //Loops on ingredients creates lis appends them to ul
  for (i in meal) {
    if (i.includes("Ing") && meal[i] != "" && meal[i] != " ") {

      let li = document.createElement('li');
      li.innerHTML = meal[i];
      ulResult.appendChild(li)

      // console.log('ing---->', meal[i])
      ingArr.push(meal[i]);
    };
  };


  //Creates H2 to display Measurements
  const h2Meas = document.createElement('h2');
  h2Meas.innerHTML = 'Measurements';
  //apends it to ul
  ulResult.appendChild(h2Meas);

  for (m in meal) {
    if (m.includes("Meas") && meal[m] != "" && meal[m] != " ") {

      let li = document.createElement('li');
      li.innerHTML = meal[m];
      ulResult.appendChild(li);
      // console.log('mes---->', meal[m])
      measArr.push(meal[m]);
    };
  };
}


//* SEARCH BAR
searchButton.addEventListener('click', searchMeal);