/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/doctorsSlice';

const DoctorsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
    console.log('why dispatch', dispatch);
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctors);

  // const renderedDoctors = doctors.map((doctor) => (
  //   <section className="" key={doctor.id}>
  //     <p>{doctor.experience}</p>
  //     <p className="">{doctor.image}</p>
  //     <p>{doctor.name}</p>
  //     <p>{doctor.specialization}</p>
  //   </section>
  // ));

  return (
    <div className="">
      <h2>Doctors</h2>
    </div>

  );
};

export default DoctorsList;
