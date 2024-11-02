import { useEffect, useState } from "react"
import { CategoryList } from "../components/CategoryList"
import { getAllCategories } from "../api";
import { Breadcrumb } from "../components/Breadcrumb";


function CategoryListAll(){
 
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getAllCategories().then(data => setCategories(data.categories));
        console.log('useEffect All');
        
    }
    , [])
    return <div className="container">
        <div className="row">
            <div className="col-12 mt-3 mb-3 text-center text-white fs-1">
                Category
            </div>
        </div>
        <CategoryList categories = {categories} countCategories={categories.length}/>
    </div> 
    
    

}
export { CategoryListAll }