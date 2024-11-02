import { useState, useEffect } from "react"
import { fiterByArea } from "../api";
import { Preloader } from "./Preloader/Preloader";
import { Meal } from "./Meal";
import { Link } from "react-router-dom";

function AreasRecipeList({nameArea}){

    const [recipe, setRecipe] = useState([]);

    const nexSrc=require('../img/fast_forward_g52r3w3hrmxo_256.png')

    useEffect(() => {
        fiterByArea(nameArea).then(data => {setRecipe(data.meals)})
    }, [nameArea])

    return <>
         { recipe.length ? recipe.map((meal, index) =>  
            index < 3 ? 
            <Meal key={meal.idMeal} {...meal}/> 
            : '')
             : <Preloader /> }
        <div className="col-3 d-flex flex-column justify-content-center ">
            
          <div className="text-center w-100 ">
        <Link to={`/area/${nameArea}`} >
            <img src={nexSrc} alt="" className="w-25 "/>
        </Link>
          </div>
          <div className="fs-4 text-white text-center  pt-3 pb-3 ps-5 pe-5  w-100 cursor-pointer mb-5 " >
          <Link to={`/area/${nameArea}`} className="text-decoration-none text-white">
            All Meals
            </Link>
            </div>
        </div>
    </>
}
export { AreasRecipeList }