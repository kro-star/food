import { useState } from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import {} from './menu.css'
import { Link } from "react-router-dom";
import { Search } from "../Search";
import logoSrc from '../../img/logo1.png'
import { RigthMenu } from "../RightMenu";


function Menu(props) {
    const [open, setOpen] = useState(false);
    const [visibleSearch, setVisibleSearch] = useState(false);

    const {handleMeals, handleDoSearch, handleSearchText } = props

    const close = () => setOpen(false);

    return <>
        <RigthMenu open={open} close={close} />
        <div className="row position-relative">
          <div className="col-2">
            <Hamburger open={open} setOpen={setOpen} />
          </div>
          <div className="col-8 d-flex justify-content-center">
            <Link  to="/">
              <img src={logoSrc} alt="" className='logo'/>
            </Link>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center pe-3 " onClick={() => setVisibleSearch(!visibleSearch)}>
            <svg className='search-svg mt-1 h-60'  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 30 30' >
              <path className='search-svg ' d="M23.347 24.5086L16.2032 17.3636C13.0253 19.6229 8.64625 19.0702 6.1293 16.0922C3.61234 13.1142 3.79716 8.7043 6.55446 5.94731C9.31103 3.18912 13.7214 3.00351 16.6999 5.52033C19.6785 8.03715 20.2315 12.4166 17.972 15.5948L25.1157 22.7398L23.3482 24.5073L23.347 24.5086ZM11.857 6.24979C9.48659 6.24926 7.44157 7.91316 6.96005 10.2341C6.47853 12.5551 7.69285 14.8952 9.8678 15.8376C12.0428 16.7801 14.5806 16.0658 15.9448 14.1274C17.3089 12.1889 17.1245 9.55896 15.5032 7.82981L16.2595 8.57981L15.407 7.72981L15.392 7.71481C14.4567 6.77378 13.1837 6.24622 11.857 6.24979Z" >

              </path>
            </svg>
          </div>
        </div>
        <div className="row">
          <div className={visibleSearch ? "col-12 mt-3 visibleSearch" :"col-12  "} id='search-down'>
            <Search handleMeals = {handleMeals} handleDoSearch={handleDoSearch} handleSearchText={handleSearchText} visibleSearch={visibleSearch}/>
          </div>
        </div>
       </>
     
  };

  export { Menu }