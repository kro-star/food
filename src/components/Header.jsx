import { Link } from 'react-router-dom';
import { Search } from './Search';
import logoSrc from '../img/logo1.png'
import { Menu } from './Menu/Menu';


function Header (props) {
    const {handleMeals, handleDoSearch, handleSearchText} = props;

    return <>
      <div className="  pt-3 pb-3 bg-dark-broun z-2 position-relative">
            <nav className="bg-dark-broun text-white ">
                <div className="container">
                    <div className="row d-md-none align-items-center">
                        <div className="col-12  ">
                            <Menu handleMeals = {handleMeals} handleDoSearch={handleDoSearch} handleSearchText={handleSearchText}/>
                        </div>
                    </div>
                    <div className="row d-none d-md-flex w-100 align-items-center">
                        <div className="col-4 d-flex gap-5">
                            <div className=''>
                                <Link  to={"/category"} className='text-decoration-none mr-3'>
                                    <div className="text-white">
                                        Category
                                    </div>
                                </Link>
                            </div>
                            <div className="mr-3">

                                <Link  to={"/area"} className='text-decoration-none'>
                                    <div className="text-white  ">
                                        Area
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 text-center  ">
                            <Link  to="/">
                                <img src={logoSrc} alt="" className='logo'/>
                            </Link>
                        </div>
                        <div className="col-4  d-flex justify-content-end align-items-center">
                            <Search handleMeals = {handleMeals} handleDoSearch={handleDoSearch} handleSearchText={handleSearchText}/>
                        </div>
                    </div>
                        
                       
                    
                </div>
            </nav>
    </div>
               
    </>
}

export { Header };