import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);

  const appointments = useSelector((state) => state.appointments);

  const { data, loading } = appointments;

  useEffect(() => {
    if (user) {
      dispatch(getAppointments(user.user_id));
    }
  }, []);

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
    </div>
  );
};

export default Appointments;
