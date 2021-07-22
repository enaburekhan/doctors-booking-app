import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <section>
      <h1>Doctors Booking app</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Doctors</Link>
        </div>
      </div>
    </section>
  </nav>
);

export default NavBar;
