import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { changeType } from '../redux/typeSlice';

const Login = () => {
  const dispatch = useDispatch();
  const access = 'Login';
  useEffect(() => {
    dispatch(changeType(access));
  }, []);

  const { error } = useSelector((state) => state.user);

  return (
    <>
      { error
        ? (
          <div>
            <div className="login-error">{error}</div>
            <br />
            <RegisterForm access={access} endpoint="authentications" />
          </div>
        )
        : (
          <RegisterForm access={access} endpoint="authentications" />
        )}
    </>
  );
};

export default Login;
