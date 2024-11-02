import { API_URL } from "./config";

const getAllCategories = async () => {
    let response = await fetch(API_URL + 'categories.php');
    if (response.ok) { 
        let json = await response.json();
        return json;
        
      } else {
        console.log("Ошибка HTTP: " + response.status);
        return [];
      }
}
const getMealById = async (nameMeal) => {
    const response = await fetch(API_URL + 'filter.php?i=' + nameMeal);
    return response.json();
}
const getFullRecipe = async(idMeal) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + idMeal);
  return response.json();
}
const getFilteredbyCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return response.json();
}

const getRndRecipe = async() => {
  const response = await fetch(API_URL + 'random.php');
  return response.json();
}
const searchMealByName = async(nameMeal) => {
  const response = await fetch(API_URL + 'search.php?s=' + nameMeal);
  return response.json();

}

const getAllAreas = async () => {
  const response = await fetch(API_URL + 'list.php?a=list');
  return response.json();
}

const fiterByArea = async (nameArea) => {
  const response = await fetch(API_URL + 'filter.php?a=' + nameArea);
    return response.json();
}




export{getAllCategories, getMealById, getFilteredbyCategory, getFullRecipe, getRndRecipe, searchMealByName, getAllAreas, fiterByArea}