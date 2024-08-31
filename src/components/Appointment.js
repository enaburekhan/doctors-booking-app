import {
  Link, Navigate, useNavigate, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API from '../api/api';
import { getAppointments } from '../redux/appointmentsSlice';

const Appointment = () => {
  const { data: user } = useSelector((state) => state.user);
  const doctorState = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem('token');
      dispatch(getAppointments(token));
    }
  }, [dispatch, user]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${API}/appointments/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getAppointments(token));
      setDeleteSuccess(true);
      navigate('/appointments');
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const { loading } = doctorState;

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        {loading && <span className="spinner-border spinner-border-lg" />}
        {
          doctorState && (
          <div className="card w-50">
            <div className="card-body">
              <p className="card-text">
                Appointment Id: &nbsp;
                {id}
              </p>
              <p>
                With &nbsp;
                <Link to={`/doctors/${doctorState.data.id}`}>
                  {doctorState.data.name}
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
        { deleteSuccess && (
          toast.success('Appointment successfully deleted')
        )}

      </header>
    </div>
  );
};

export default Appointment;
