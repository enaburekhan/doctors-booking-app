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
  console.log('doctor', doctor);

  if (!user) {
    return <Redirect to="/Login" />;
  }

  const { data, loading } = doctor;
  console.log('ericData', data);

  return (
    <div className="">
      <div className="text-center">
        {loading && <span className="spinner-border spinner-border-lg" />}
      </div>

      {data && (
        <div>
          <img src={data.image} alt={data.name} className="" />
          <p>{data.name}</p>
          <p>{data.specialization}</p>
          <p>{data.experience}</p>
          <p>consultation fee: 3000 Naira</p>
          <li>
            <Link
              to={{
                pathname: '/appointments/new',
                doctorId: data.id,
              }}

            >
              Add Appointment
            </Link>
          </li>
        </div>
      )}

    </div>

  );
};

export default Doctor;
