import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/js/src/collapse';


const Navbar = () => {
    return (
        
    <nav className="navbar navbar-expand-md navbar-light bg-orange main-nav">
    <div className="container-fluid">
    <Link to="/" className="nav-log-text">
      <h4>Carros Top</h4>
    </Link>

<button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#dscatalog-navbar"
  aria-controls="dscatalog-navbar"
  aria-expanded="false"
  aria-label="Toggle navigation"
>

  <span className="navbar-toggler-icon"></span>
</button>



    <div className="collapse navbar-collapse" id="dscatalog-navbar">
      <ul className="navbar-nav offset-md-8 main-menu">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/products">CATÁLOGO</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }

  export default Navbar;