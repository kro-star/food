import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { PageNotFound } from './pages/PageNotFound';
import { Home } from './pages/Home';
import { CategoryListAll } from './pages/CategoryListAll';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { MealList } from './pages/MealList';
import { AreaList } from './pages/AreaList';
import { Area } from './pages/Area';
import { useState } from 'react';

function App() { 
  
  const [meals, setMeals] = useState([]);
  const [doSearch, setDoSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleMeals = (mealsArray) => {
    setMeals(mealsArray)
  }
  const handleDoSearch = (boolSeach) => {
    setDoSearch(boolSeach);
  }
  const handleSearchText = (text) => {
    setSearchText(text);
  }

  return (
    <>
    <BrowserRouter>      
      <Header meals = {meals} handleMeals ={handleMeals} handleDoSearch={handleDoSearch} handleSearchText={handleSearchText}/>
      <div className='back'></div>

      <main  >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/area" element={<AreaList />}/>
          <Route path="/area/:nameArea" element={<Area />}/>
          <Route path="/category" element={<CategoryListAll />}/>
          <Route path="/category/:name" element={<Category />}/>
          <Route path="/meal" element={<Category />}/>//////////////
          <Route path="/meal/:idMeal" element={<Recipe />}/>
          <Route path="/mealList" element={<MealList searchMeals = {meals} handleMeals={handleMeals} doSearch = {doSearch} searchText={searchText} handleDoSearch={handleDoSearch} handleSearchText={handleSearchText}/>}/>

          <Route pash="*" element={< PageNotFound />}/>                    
        </Routes>      
      </main>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
