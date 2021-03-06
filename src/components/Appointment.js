import {
  Link, Redirect, useHistory, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import API from '../api/api';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointment = () => {
  const { data: user } = useSelector((state) => state.user);
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!user) {
    return <Redirect to="/Login" />;
  }

  const { id } = useParams();

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    fetch(
      `${API}/appointments/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(() => {
      dispatch(getAppointments(token));
      history.push('/appointments');
    });
  };

  const { error, loading } = doctor;

  return (
    <div className="container">
      <header className="jumbotron">
        {loading && <span className="spinner-border spinner-border-lg" />}
        {
          doctor && (
          <div className="card w-50">
            <div className="card-body">
              <p className="card-text">
                Appointment Id: &nbsp;
                {id}
              </p>
              <p>
                With &nbsp;
                <Link to={`/doctors/${doctor.id}`}>
                  {doctor.data.name}
                </Link>
              </p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => { handleDelete(id); }}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </div>
          )
        }
        {
          error && <p>{error}</p>
        }
      </header>
    </div>
  );
};

export default Appointment;
