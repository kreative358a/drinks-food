import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper className='wrapper'>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            {/* <NavLink to='/?search=all' className='nav-link'> */}
            Home
          </NavLink>
          <NavLink to="/drinks" className="nav-link">
            Drinks
          </NavLink>                    
          <NavLink to="/meals" className="nav-link">
            Meals
          </NavLink>          
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
        <span>
          <ThemeToggle />
        </span>
      </div>
    </Wrapper>
  );
};

export default Navbar;
