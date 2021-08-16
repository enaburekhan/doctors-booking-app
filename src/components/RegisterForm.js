import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAuth } from '../redux/userSlice';
import Loading from './Loading';

const RegisterForm = ({ access, endpoint }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push('/doctors');
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuth({
      username, password, age, endpoint,
    }));
  };
  if (user.loading) {
    return <Loading />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group create">
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
          <label htmlFor="age" className="control-label">
            Age
            <input
              type="number"
              name="age"
              id="age"
              required
              minLength="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group create">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            {access}
          </button>
        </div>
      </form>
      { access === 'Signup' ? (
        <p className="text-center">
          Do you already have an account?
          {' '}
          <Link to="/Login">Login</Link>
        </p>
      ) : (
        <p className="text-center">
          Do you need to create an account?
          {' '}
          <Link to="/Signup">Signup</Link>
        </p>
      )}
    </>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  access: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};
