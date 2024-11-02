import { useParams, useNavigate, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { getFullRecipe } from "../api";
import { Preloader } from "../components/Preloader/Preloader";


function Recipe(){
    const {idMeal} = useParams();
    const [meal, setMeal] = useState([]);
    const  goback  = useNavigate();

    const backSrc = require('../img/back-1.png')

        const ingredients = [];
        
        for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
            ingredients.push({
              ingredient: meal[ingredientKey],
              measure: meal[measureKey]
            });
        }
        
    

    useEffect(() => {
        getFullRecipe(idMeal).then(data => {
            setMeal(data.meals[0])
        })
        
    }, [idMeal])

 
    
    return <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div onClick ={() => goback(-1)} className=' text-white mt-3'>
                    <img src={backSrc} alt="" className='me-3 lh-1 cursor-pointer' /> 
                    <span className='cursor-pointer '>
                        Go back
                    </span>
                </div>
            </div>
        </div>

        
        <div className="row pt-5">
            <div className="col-12">
            <div className="bg-brown-opacity mt-5 p-5 position-relative">
                { !meal.idMeal ? <Preloader /> :
                <>
                <div className="position-absolute recipe-name  z-2  w-100 d-flex justify-content-center">
                    <div className=" fs-3 border-image rounded-3 pt-3 pb-3 ps-5 pe-5 bg-orange text-white">
                            {meal.strMeal}
                        </div>  
                </div>
                <div className="row position-relative">
                    <div className="col-12 col-lg-6 ">
                        <div className="recipy-img m-5">

                        <img src={meal.strMealThumb} alt={meal.strMeal} className="recipy-img-shadow  w-100 position-relative "/>
                        </div>
                    </div>
                    <div className="recipe-ingridiends text-white col-12 col-lg-6">
                        <div className="fs-4 text-center pb-3 pt-5">Ingridients</div>
                    {
                    ingredients.map((el) => {
                        if(el.ingredient !== null && el.ingredient !== '') {
                            return <div className=" ps-lg-5 pt-1 pb-1 d-flex">
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

                    {meal.strInstructions}
                    </div>
                </div>
                </>
                }
                </div>
            </div>
        </div>
        <div className="row mt-5 mb-3">
            <div className="col-lg-9 col-md-3  d-none d-md-block"></div>
            <div className="col-lg-3 col-md-6  col-12 ">
                <div className="category-name fs-4 text-center pt-3 pb-3 pe-5 ps-5 categ-border text-white" onClick={() => goback(-1)}>Go back</div>
            </div>            
            <div className="col-lg-9 col-md-3  d-none d-md-block d-lg-none"></div>
        </div>
    </div>

    
    </>

}
export {Recipe}

/*
idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strIngredient1, strIngredient20, strMeasure1
*/