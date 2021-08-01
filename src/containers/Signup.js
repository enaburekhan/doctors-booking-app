import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { changeType } from '../redux/typeSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const access = 'Signup';
  useEffect(() => {
    dispatch(changeType(access));
  }, []);
  return (
    <>
      <RegisterForm access={access} endpoint="users" />
    </>
  );
};

export default Signup;
