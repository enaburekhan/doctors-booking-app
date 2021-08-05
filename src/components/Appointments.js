import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);

  const appointments = useSelector((state) => state.appointments);
  console.log('appointments', appointments);

  const { data, loading } = appointments;
  useEffect(() => {
    if (user) {
      dispatch(getAppointments());
    }
  }, [dispatch]);

  if (!user) {
    return <Redirect to="/Login" />;
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
      </div>
      {
      data && data.map((appointment) => {
        const d = new Date(appointment.appointment_date);
        const date = d.toUTCString();
        return (
          <Link to={`/appointments/${appointment.id}`} key={appointment.id}>
            <div className="card m-4">
              <div className="card-body">
                <p>
                  On &nbsp;
                  {date}
                </p>
              </div>
            </div>
          </Link>
        );
      })
  }
    </div>

  );
};

export default Appointments;
