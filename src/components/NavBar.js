import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <nav>
    <section>
      <h5>Echantill clinic</h5>

      <div className="navContent">
        <div className="navLinks">
          <ul>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>

        </div>
      </div>

    </section>
  </nav>
);

export default NavBar;
