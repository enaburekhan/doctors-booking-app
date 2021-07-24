// import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import signUp from '../containers/signUp';

const NavBar = () => (
  <nav>
    <section>
      <h1>Doctors Booking app</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Doctors</Link>
          <br />
          <Link to="/appointments">Appointments</Link>
          <br />
          <Link to="/signUp">signUp</Link>
        </div>
      </div>

    </section>
  </nav>
);

export default NavBar;
