import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className="logout">
      { token && (
        <button
          type="button"
          aria-label="Logout"
          onClick={handleClick}
        >
          <span>Logout</span>
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      ) }
    </div>
  );
};

export default Logout;
