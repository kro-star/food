import { Link } from "react-router-dom";

function Meal(props) {

    const {strMeal, strMealThumb, idMeal} = props;

    return <div className="col-12 col-md-4 col-sm-6 col-lg-3 p-3">
        <Link to={`/meal/${idMeal}`} className="text-decoration-none">
        <div className="   d-flex flex-column ">
            <div className="card-image w-100  ">
                <img src={strMealThumb} alt={strMeal} className="rounded-100 w-100"/>
            </div>
            <div className="text-white pt-3 pb-3 card-text text-center fs-5 align-content-end ">
                {strMeal}
            </div>
        </div>
        </Link>

    </div>

}
export {Meal}