import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilteredbyCategory } from '../api';
import { Preloader } from '../components/Preloader/Preloader';
import { MealList } from './MealList';


function Category () {

    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const  navigate  = useNavigate();

    const backSrc = require('../img/back-1.png')

    useEffect(()=>{
        getFilteredbyCategory(name).then(data => setMeals(data.meals));
    }, [name]);


    return <> 
    
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div onClick ={() => navigate(-1)} className=' text-white mt-3'>
                    <img src={backSrc} alt="" className='me-3 lh-1 cursor-pointer' /> 
                    <span className='cursor-pointer '>
                        Go back
                    </span>
                </div>

            </div>
        </div>
    <div className="row">
        <div className="col-12">
            <div className="fs-1 text-white text-center p-3"> {name}</div>
        </div>
    </div>
        {!meals.length  ? <Preloader /> :
        <MealList meals={meals}/>  } 
    </div>
    </>
}
export {Category}
