import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAppointments } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postAppointments());
  }, [dispatch]);

  const appointments = useSelector((state) => state.appointments);
  console.log('appointments', appointments);

  //   const renderedAppointments = appointments.map((appointment) => (
  //     <section className="" key={appointment.id}>
  //       <p>{appointment.appointmentDate}</p>
  //       <p>{appointment.doctorId}</p>
  //       <p>{appointment.userId}</p>
  //     </section>
  //   ));

  return (
    <div className="">
      <h1>Appointments</h1>
      {/* <h2>{renderedAppointments}</h2> */}
    </div>
  );
};

export default Appointments;
