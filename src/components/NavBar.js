import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <nav>
    <section>
      <h5>Echantill clinic</h5>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/doctors">Doctors</Link>
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
