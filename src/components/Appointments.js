import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(getAppointments(user.id));
    }
  }, []);

  const appointmentsState = useSelector((state) => state.appointments);
  console.log('appointments', appointmentsState);

  const { data, loading } = appointmentsState;

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container text-center">
      <h3>Appointments</h3>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <div className="d-flex flex-wrap">
        {(!loading && data.length === 0)
      && (
      <h4>
        You do not have any appointment. Create one
        <Link to="/appointments/new">
          here
        </Link>
      </h4>
      )}
        ;
        {data && (data.map((appointment) => (
          <Link to={`/appointments/${appointment.id}`} key={appointment.id}>
            <div className="card m-4">
              <div className="card-body">
                <p>
                  On &nbsp;
                  {appointment.appointmentDate}
                </p>
              </div>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
};

export default Appointments;
