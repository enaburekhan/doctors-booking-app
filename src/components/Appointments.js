import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);

  const appointments = useSelector((state) => state.appointments);

  const { data, loading } = appointments;
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (user) {
      dispatch(getAppointments(token));
    }
  }, [dispatch]);

  if (!user) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className="card text-center">
      <h3>Appointments</h3>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <div className="card-body d-flex flex-wrap">
        {(!loading && data.length === 0)
        && (
        <h4 className="create-appointment">
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
          <Link to={`/appointment/${appointment.id}`} key={appointment.id}>
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
