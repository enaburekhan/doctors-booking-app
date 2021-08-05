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
  const { loading } = doctors;

  const renderedDoctors = doctors.data && doctors.data.map((doctor) => (
    <div className="card style=width: 18rem listDoctors" key={doctor.id}>
      <div className="card-body">
        <img src={doctor.image} alt={doctor.name} className="card-img-top" />
        <p>{doctor.name}</p>
        <p>{doctor.specialization}</p>
        <p>{doctor.experience}</p>
        <span>experience</span>
        <Link to={`/doctors/${doctor.id}`} className="btn btn-primary ">
          View Doctor
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="">
      <h1>Doctors</h1>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <h2>{renderedDoctors}</h2>
    </div>

  );
};

export default DoctorsList;
