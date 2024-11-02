import { Link } from "react-router-dom";
import { AreasRecipeList } from "./AreasRecipeList";

function AreaItem ({areas}) {
    
    return (
        areas.map(area => {
            return <>
                <div className="row " key = {area.strArea}>
                    <div className="col-12 col-md-6 col-lg-3 pt-3 pb-3 br-bottom">
                        <Link to={`/area/${area.strArea}`} className='text-decoration-none'>
                            <div className="fs-2 text-white"> {area.strArea} </div>
                        </Link>
                        
                    </div>
                    <div className="d-none col-md-6 col-lg-9 d-md-block"></div>
                </div>
                <div className="row mt-5 mb-5">
                    <AreasRecipeList nameArea={area.strArea} />
                </div>
            </>
            
        })
    )
    
    
}
export {AreaItem}