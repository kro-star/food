
import { useLocation, useNavigate } from "react-router-dom";
import { Meal } from "../components/Meal";
import { Preloader } from "../components/Preloader/Preloader";
import { useEffect } from "react";
import { searchMealByName } from "../api";


function MealList (props) {

    const {searchMeals = [], doSearch, meals = [], searchText, handleMeals = Function.prototype, handleSearchText = Function.prototype, handleDoSearch = Function.prototype} = props;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchFromUrl = searchParams.get('search'); // Получаем search из URL

    console.log('searchFromUrl', searchFromUrl); // Проверяем, что search получен
    
    useEffect(() => {
        if(searchFromUrl){
            handleSearchText(searchFromUrl);
            handleDoSearch(true);
           // navigate({
           //     pathname: '/meallist',
           //     search: `?search=${searchFromUrl}`
           // }, {
            //    state: { search: `?search=${searchFromUrl}` }})
            searchMealByName(searchFromUrl).then(data => handleMeals(data.meals));
        }
    }, [searchFromUrl])

    return <>
    {doSearch ? 
        searchMeals ? 
            (searchMeals.length > 0) ?  
                <div className="container">
                    <div className="row pt-3 pb-3 br-bottom">
                        <div className="text-white fs-1">
                            All meals that was found on request "{searchFromUrl}"
                        </div>

                    </div>
                    <div className="row pt-5">
                        {searchMeals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
                    </div>
                </div>
                
                : <Preloader />
            : <div className="container">
                <div className="row pt-3 pb-3 ">
                    <div className="text-white text-center fs-1">
                        Nothing was found on request "{searchText}"
                    </div>

                </div>
            </div>
        : <div className="row"> 
            {meals.length && meals.map(meal => <Meal key={meal.idMeal} {...meal}/>) }
        </div>
    }
    </>        
    
}
export {MealList}