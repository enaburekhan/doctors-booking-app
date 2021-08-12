// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SocialIcons from '../containers/SocialIcons';
import Logout from './Logout';

const NavBar = () => {
  const { data: user } = useSelector((state) => state.user);
  const token = localStorage.getItem('token');

  return (

    <nav>
      <p>Echantill hospital</p>
      {user && user.username}
      <div className="nav d-flex justify-content-between flex-column m-4">
        {token ? (
          <div>
            <Link to="/doctors" className="doc nav-link active">Doctors</Link>
            <Link to="/appointments" className="nav-link">Appointments</Link>
            <Logout />
          </div>
        ) : (
          <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Signup" className="nav-link">Signup</Link>
            <Link to="/Login" className="nav-link">Login</Link>
          </div>
        )}
      </div>
      <footer className="">
        <SocialIcons />
        <p>&copy;2021, Echantill hospital</p>
      </footer>
    </nav>
  );
};

export default NavBar;
