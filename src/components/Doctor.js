import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getDoctor } from '../redux/doctorSlice';

const Doctor = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(id));
  }, []);

  const user = useSelector((state) => state.user);
  const doctor = useSelector((state) => state.doctor);

  if (!user) {
    return <Redirect to="/Login" />;
  }

  const { data, loading } = doctor;

  return (
    <div className="">
      <div className="text-center">
        {loading && <span className="spinner-border spinner-border-lg" />}
      </div>

      {data && (
        <div className="card style=width: 18rem">
          <img src={data.image} alt={data.name} className="card-img-top single-doctor-img" />
          <div className="card-body">
            <p>{data.name}</p>
            <p>{data.specialization}</p>
            <p>{data.experience}</p>
            <p>experience</p>
            <p>consultation fee: 3000 Naira</p>
            <Link
              to={{
                pathname: '/appointments/new',
                doctorId: data.id,
              }}
              className="btn btn-info"
            >
              Add Appointment
            </Link>
          </div>
        </div>
      )}

    </div>

  );
};

export default Doctor;
