import { CategoryItem } from "./CategoryItem/CategoryItem" 
import { useState, useEffect } from "react"

function CategoryList (props) {
    const {categories = [], countCategories = 7} = props
    const [count, setCount] = useState(7);

    const nexSrc = require('../img/fast_forward_g52r3w3hrmxo_256.png')

    useEffect(() => {
      setCount(countCategories);
    }, [countCategories]);

    return  <div className="row">

      {categories.map((el, index) => {
        if( index < count )
          {
            return <CategoryItem key={el.idCategory} {...el}/>
          } else {
            return null
          }
        }
      )}
      { count >= categories.length ? null :
        <div className="col-md-3 col-sm-6 col-12 d-flex  flex-column justify-content-between align-items-end">
          <div className="text-center w-100">
            <img src={nexSrc} alt="" className="w-25 mt-5"/>
          </div>
          <div className="fs-4 text-white text-center rounded-3 pt-3 pb-3 w-100 categ-border category-name w-100 cursor-pointer mb-5 " onClick={() => setCount(count + 4)}> 
            Next category</div>
        </div>
      }
      
    </div>       
}
export {CategoryList}