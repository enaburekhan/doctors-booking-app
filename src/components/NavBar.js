import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const { data: user } = useSelector((state) => state.user);

  return (
    <nav className="nav flex-column">
      <p>Echantill clinic</p>
      {user && user.username}
      {user ? (
        <div>
          <Link to="/doctors" className="doc nav-link active">Doctors</Link>
          <Link to="/appointments" className="nav-link">Appointments</Link>
          <Logout />
        </div>
      ) : (
        <div>
          <Link to="/Signup" className="nav-link">Signup</Link>
          <Link to="/Login" className="nav-link">Login</Link>
          <Link to="/" className="nav-link">Home</Link>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
