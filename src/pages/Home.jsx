import React, {useState, useEffect} from "react"
import { getAllCategories, getRndRecipe } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader/Preloader";
import { RndRecipe } from "../components/RndRecipe";
import { Breadcrumb } from "../components/Breadcrumb";
import { Outlet } from "react-router-dom";

import bannerSrc from '../img/banner1.jpg'

function Home () {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getAllCategories().then(data => setCategories(data.categories))
    }
    , [])

    return <>
    <div className="w-100  br-bottom ">
        <img src={bannerSrc} alt="" className="w-100 h-100" />        
    </div>
    <div className="container">
    <div className="row mt-4">
        <div className="fs-2 mb-4  text-white">
            Category
        </div>
        {
        categories.length > 0 ?
        <CategoryList categories={categories}/> :
        <Preloader />
        }
        <RndRecipe />
    </div>
</div>
    </>
}
export {Home}