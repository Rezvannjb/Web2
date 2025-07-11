import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../styles/logo.webp'; // مسیر تصویر لوگو

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* بخش چپ: دکمه SEE PROGRAMS */}
        <div className="navbar-left">
          <button className="navbar-btn btn-outline">log in</button>
        </div>
        
        {/* بخش وسط: لوگو (تصویر) */}
        <div className="navbar-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Website Logo" 
              className="navbar-logo-img"
            />
          </Link>
        </div>
        
        {/* بخش راست: لینک‌های ناوبری */}
        <div className="navbar-right">
          <Link to="./Students" className="navbar-link">students</Link>
          <Link to="/programs" className="navbar-link">About</Link>
          <Link to="/contact" className="navbar-link">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;