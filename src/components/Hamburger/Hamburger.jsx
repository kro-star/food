
import {} from './hamburger.css'
 
 function Hamburger(props){
  const { open, setOpen = Function.prototype} = props;

  return <>
  
    <div id="nav-icon6" className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
        <span></span>
    </div>

  </> 
}
export {Hamburger}