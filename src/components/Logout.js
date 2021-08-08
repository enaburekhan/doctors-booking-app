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
    <div className="">
      { token && (
        <button
          type="button"
          aria-label="Logout"
          onClick={handleClick}
        >
          Logout
        </button>
      ) }
    </div>
  );
};

export default Logout;
