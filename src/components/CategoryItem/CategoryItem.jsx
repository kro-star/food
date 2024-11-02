import { Link } from 'react-router-dom';
import {} from './categoryItem.css';

function CategoryItem (props) {
    const {idCategory, strCategoryDescription, strCategory, strCategoryThumb} = props;


    return <>
    <div className=" col-md-3 col-sm-6 col-12 ">

        <div className="mb-5 category" id={idCategory}>
            <div className='text-center category-image '>

            <Link to={`/category/${strCategory}`} >
                <img src={strCategoryThumb} alt="" className=' mb-4 w-100'/>
            </Link>
            </div>
            <Link to={`/category/${strCategory}`} className='text-decoration-none'>
                <div className="category-name fs-4 text-center pt-3 pb-3  categ-border text-white">
                {strCategory}
                </div>            
            </Link>
            
            
        </div>
    </div> 
    
    </>   
}
export {CategoryItem}