import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Breadcrumb() {

    const location = useLocation();

  return (
    <div className="container pt-3">
    <div className="row">
        <div className="col-12">
            <nav className="bc-tag text-white ps-4" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to = '/' className={ `text-decoration-none cursor-pointer text-green  ${location.pathname === "/" && 'text-decoration-none cursor-pointer text-white'}`}>
                            Home
                        </Link>
                        
                    </li>
                    {location.pathname.includes("/category") && (
                        <>
                        <li>

                            <Link
                            to={"/category"}
                            className={` hover:text-black cursor-pointer  ${
                                location.pathname.includes("/category") &&
                                "  text-white"
                            } ${
                                location.pathname.includes("/category/") &&
                                "  text-black"
                            }`}>
                            Category
                            </Link>
                        </li>
                        </>
                        )}
                        {location.pathname.includes(`/category/`) && (
                        <>
                            <li>

                            <Link
                            to={"/category"}
                            className={`hover:text-black  cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
                                location.pathname.includes("/category") &&
                                "bg-[#b572d6] text-white"
                            }`}>
                            Single Product
                            </Link>
                            </li>
                        </>
                        )}
                </ol>
            </nav>
        </div>
    </div>       
</div>


    
  );
}

export { Breadcrumb }
