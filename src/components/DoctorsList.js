/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors, selectAllDoctors } from '../redux/doctorsSlice';

const DoctorsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const doctors = useSelector(selectAllDoctors);
  // console.log('render doctors', doctors);

  const renderedDoctors = doctors.map((doctor) => (
    <section className="" key={doctor.id}>
      <img src={doctor.image} alt={doctor.name} className="" />
      <p>{doctor.name}</p>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience}</p>
      <Link to={`/doctors/${doctor.id}`} className="">
        View Doctor
      </Link>
    </section>
  ));

  return (
    <div className="">
      <h1>List Doctors</h1>
      <h2>{renderedDoctors}</h2>
    </div>

  );
};

export default DoctorsList;
