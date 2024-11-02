import { useState, useEffect } from "react";
import { getRndRecipe } from "../api";
import { Preloader } from "./Preloader/Preloader";

function RndRecipe () {

    
    const [rndRecipe, setRndRecipe] = useState([]);


    useEffect( () => {
        getRndRecipe().then(data => setRndRecipe(data.meals[0]))
    }
    , [])

    const ingredients = [];
    
        for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
            ingredients.push({
              ingredient: rndRecipe[ingredientKey],
              measure: rndRecipe[measureKey]
            });
        }

return  <>   
     { !rndRecipe.idMeal ? <Preloader /> : <>
        <div className="row">
                <div className="col-12">
                    <div className="fs-3 text-white mt-4 mb-4 ">
                    Prepare it now
                    </div>
                </div>
            </div>
    <div className="row ">
        <div className="col-12 bg-brown-opacity mt-5 p-5 position-relative">
           
            <div className="position-absolute recipe-name  z-2  w-100 d-flex justify-content-center">
                <div className=" fs-3 border-image rounded-3 pt-3 pb-3 ps-5 pe-5 bg-orange text-white">
                        {rndRecipe.strMeal}
                    </div>  
            </div>
            <div className="row position-relative">
                <div className=" col-12 col-lg-6 ">
                    <div className="recipy-img m-5">

                    <img src={rndRecipe.strMealThumb} alt={rndRecipe.strMeal} className="recipy-img-shadow  w-100 position-relative "/>
                    </div>
                </div>
                <div className="recipe-ingridiends text-white col-12 col-lg-6 ">
                    <div className="fs-4 text-center pb-3 pt-4">Ingridients</div>
                {
                ingredients.map((el) => {
                    if(el.ingredient !== null && el.ingredient !== '') {
                        return <div className="ps-lg-5 pt-1 pb-1 d-flex">
                            <div className="">{el.ingredient}</div>
                            <div className="b-bottom flex-grow-1"></div>
                            <div className="col2">{el.measure}</div>
                        </div>
                    } })
                }
                </div>
            </div>
            <div className="recipe-instructions">
                <div className="fs-4 p-3 text-center text-white">Instruction</div>
                <div className="text-white">

                {rndRecipe.strInstructions}
                </div>
            </div>
        </div>
    </div>
    </>
    }
    </>
}

export { RndRecipe }