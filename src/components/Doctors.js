import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../redux/doctors';

const Doctors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return <div><h1>doctors...</h1></div>;
};

export default Doctors;
