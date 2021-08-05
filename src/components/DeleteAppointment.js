import React, { useState } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../redux/appointmentsSlice';
import API from '../api/api';

const DeleteAppointment = () => {
  const [successful] = useState(false);
  const { data: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);
  console.log('mainAppointment', appointment);

  if (!user) {
    return <Redirect to="/Login" />;
  }

  const { id } = useParams();

  const handleDelete = (appointment) => {
    const token = localStorage.getItem('token');
    fetch(
      `${API}/appointments/${appointment.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(() => dispatch(getAppointments(token)));
  };

  if (successful) {
    return <Redirect to="/appointments" />;
  }

  const doctor = useSelector((state) => state.doctor);

  const { data, error, loading } = doctor;

  return (
    <div className="container">
      <header className="jumbotron">
        {loading && <span className="spinner-border spinner-border-lg" />}
        {
          doctor && (
          <div>
            <p>
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
              className="btn btn-primary btn-block"
              type="button"
              onClick={() => { handleDelete(appointment); }}
              disabled={loading}
            >
              Delete
            </button>
          </div>
          )
        }
        {
          error && <p>{data}</p>
        }
      </header>
    </div>
  );
};

export default DeleteAppointment;
