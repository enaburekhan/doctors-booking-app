import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const type = useSelector((state) => state.type);
  const token = localStorage.getItem('token');
  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    history.push('/Login');
  };
  return (
    <div className="">
      {/* <h1>{type}</h1> */}
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
