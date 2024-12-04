import { fetchAPI, fetchRandom } from "./api_connection.js";
import { getInput } from "./searching.js"; 
import { displayRecipes } from "./recipes.js";

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const recipesContainer = document.querySelector('.recipe-container');

const init = async () =>{
  try{
  const meals = await fetchRandom();
  console.log(meals);
  displayRecipes(meals, recipesContainer)
  } catch (error) {
    console.log(error)
  }
}

searchBtn.addEventListener('click', async () => {
  const query = getInput(searchInput);
  if (!query) {
    return
  } 
  try {   
    const meals = await fetchAPI(query);
    console.log(meals);
    displayRecipes(meals, recipesContainer)
} catch (error) {
    console.log(error);
    // Display error function
  }
})

window.addEventListener('load', init);