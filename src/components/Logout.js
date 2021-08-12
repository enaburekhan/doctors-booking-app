import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    history.push('/');
  };
  return (
    <div className="logout">
      { token && (
        <button
          type="button"
          aria-label="Logout"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      ) }
    </div>
  );
};

export default Logout;
