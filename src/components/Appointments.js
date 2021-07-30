import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addAppointment } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(addAppointment(user.userId));
    }
  }, []);

  const appointmentsState = useSelector((state) => state.appointments);
  console.log('appointments', appointmentsState);

  // const { data, loading } = appointmentsState;

  if (!user) {
    return <Redirect to="/login" />;
  }

  // if (!loading && data.length === 0) {
  //   appointments = (
  //     <h4>
  //       You do not have any appointment. Create one
  //       <Link to="/appointments/new">
  //         here
  //       </Link>
  //     </h4>
  //   );
  // } else {
  //   appointments = data && data.map(appointment => {
  //     const d = new Date(appointment.appointment_date);
  //     const date = d.toUTCString();
  //     return (
  //       <Link to={`/appointments/${appointment.id}`} key={appointment.id}>
  //         <div className="card m-4">
  //           <div className="card-body">
  //             <p>
  //               On &nbsp;
  //               {date}
  //             </p>
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   });
  // }

  return (
    <div className="container text-center">
      <h3>Appointments</h3>
      {/* {loading && <span className="spinner-border spinner-border-lg" />}
      <div className="d-flex flex-wrap">
        {appointments}
      </div> */}
    </div>
  );
};

export default Appointments;
