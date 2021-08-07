import React, { useState } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import API from '../api/api';
import { deleteAppointment } from '../redux/appointmentSlice';

const DeleteAppointment = () => {
  const [successful] = useState(false);
  const { data: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    ).then(() => dispatch(deleteAppointment(id)));
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
          error && <p>{data}</p>
        }
      </header>
    </div>
  );
};

export default DeleteAppointment;
