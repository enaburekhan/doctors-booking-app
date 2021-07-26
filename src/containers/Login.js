import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../redux/userSlice';
import Loading from './Loading';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push('/Login');
    }
  }, [token]);

  const endpoint = 'authentications';

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuth({
      username, password, endpoint,
    }));
  };
  if (user.loading) {
    return <Loading />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group create">
          <h2 className="create">Login</h2>
          <label htmlFor="username" className="control-label">
            Username
            <input
              type="text"
              name="username"
              id="username"
              required
              minLength="3"
              maxLength="15"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group create">
          <label htmlFor="password" className="control-label">
            Password
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength="5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group create">
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    </>
  );
};
// { type === 'Signup' ? (
//   <p className="text-center">
//     Do you already have an account?
//     {' '}
//     <Link to="/login">Login</Link>
//   </p>
// ) : (
//   <p className="text-center">
//     Do you need to make an account?
//     {' '}
//     <Link to="/signup">Signup</Link>
//   </p>
// )}

export default Login;
