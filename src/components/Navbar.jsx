import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <h1 className="">درس وب 2</h1>
    <div className="navbar-links">
      <Link to="/">خانه</Link>
      <Link to="/about">درباره درس</Link>
    </div>
  </nav>
);

export default Navbar;

