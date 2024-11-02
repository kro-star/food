import { useEffect, useState } from "react"
import { getAllAreas } from "../api";
import { AreaItem } from "../components/AreasItem";


function AreaList(){
 
    const [areas, setAreas] = useState([]);

    useEffect( () => {
        getAllAreas().then(data => setAreas(data.meals))        
    }
    , [])
    return <div className="container">
        <div className="row">
            <div className="col-12 mt-3 mb-3 text-center text-white fs-1">
                Areas
            </div>
        </div>
        <AreaItem areas = {areas} key = {new Date().toISOString()}/>
    </div> 
    
    

}
export { AreaList }