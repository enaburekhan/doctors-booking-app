/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/doctorsSlice';

const DoctorsList = () => {
  const { doctors } = useSelector((state) => state.doctors);
  console.log(doctors);
  // const doctorStatus = useSelector((state) => state.doctors.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

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
