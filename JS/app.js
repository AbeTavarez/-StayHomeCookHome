console.log('Running Script...')

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

    console.log('data---->', randomMeal)


    const meal = randomMeal.data.meals[0];
    console.log('meal--->', meal.strMeal);

    renderRandomMeal(meal)

  } catch (error) {
    console.error(error)
  };

};
getRandomMealData();




//*Render the random meal to top of the page
function renderRandomMeal(meal) {
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

//! Event Listener
// randomMealDIV.addEventListener('click', (e) => {
//display recipe details
// });


//* Event Handlers
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
    console.log('Result Data --->', result);
    console.log('here--->', result.data.meals[0].strIngredient1)

    renderResults(result);
  } catch (error) {
    console.error(error);
  };

};




//////
// let ingredients = Object.keys(result.data.meals[0]).includes('strIngredient1[i]');



// ingredients.filter(key => ingredients.includes('strIngredient'))

// for (let key in result.data.meals[0]) {
//   // console.log(key)
//   for (let value in result.data.meals[0]) {

//   }
// }
////////

function renderResults(result) {
  const resultsDiv = document.getElementById('search-results');
  //Create
  const h2MealName = document.createElement('h2');
  const h3Ingredients = document.createElement('h3');
  const ulResult = document.createElement('ul');
  //generate all ingredients lis needed
  const lis = document.createElement('li');

  //Modify
  h2MealName.innerHTML = result.data.meals[0].strMeal;
  h3Ingredients.innerHTML = 'Ingredients';
  lis.innerHTML = result.data.meals[0].strIngredient1;
  //Append
  resultsDiv.appendChild(h2MealName);
  resultsDiv.appendChild(h3Ingredients);
  resultsDiv.appendChild(ulResult);
  resultsDiv.appendChild(lis);

}
//   for (let i = 0; i < result.data.meals[0].strIngredients)

// }






//* SEARCH BAR
searchButton.addEventListener('click', searchMeal);