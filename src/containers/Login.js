import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { changeType } from '../redux/typeSlice';

const Login = () => {
  const dispatch = useDispatch();
  const access = 'Login';
  useEffect(() => {
    dispatch(changeType(access));
  }, []);
  return (
    <RegisterForm access={access} endpoint="authentications" />
  );
};

export default Login;
