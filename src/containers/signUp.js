import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../redux/userSlice';
import Loading from './Loading';

const signUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push('/signUp');
    }
  }, [token]);

  const endpoint = 'users';

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
          <h2 className="create">Sign up to create an account</h2>
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
              type="text"
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
          <button type="submit" className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
};

export default signUp;
