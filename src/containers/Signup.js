import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeType } from '../redux/typeSlice';
import RegisterForm from './RegisterForm';

const Signup = () => {
  const dispatch = useDispatch();
  const access = 'Signup';
  useEffect(() => {
    dispatch(changeType(access));
  }, []);
  return (
    <>
      <RegisterForm access={access} endpoint="users" />
      { access ? (
        <p className="text-center">
          <Redirect to="/Login" />
        </p>
      ) : (
        <p className="text-center">
          You need to Signup
        </p>
      )}
    </>
  );
};

export default Signup;
