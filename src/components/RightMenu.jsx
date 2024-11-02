import { Link } from "react-router-dom"

function RigthMenu(props) {
    const { open, close = Function.prototype } = props

    return <div id="styledMenu" className={open ? 'open' : ''}>
    <div className="close d-flex justify-content-end pe-4 mb" onClick={() => close()}>
      <span className="d-block"></span>
    </div>
    <div className="ps-4" onClick={() => close()}>
      <Link  to={"/category"} className='text-decoration-none m-3 d-block'>
          <div className="text-white fs-3">
              Category
          </div>
      </Link>
    </div>
    <div className="ps-4" onClick={() => close()}>
      <Link  to={"/area"} className='text-decoration-none m-3 d-block'>
          <div className="text-white  fs-3">
              Area
          </div>
      </Link>
    </div> 
  </div> 
}
export {RigthMenu}