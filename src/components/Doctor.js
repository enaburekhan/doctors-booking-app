import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { getDoctor } from '../redux/doctorSlice';
// import { selectDoctorById } from '../redux/doctorsSlice';

const Doctor = () => {
  // const [data, setData] = useState('');
  const loading = useState(true);
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Redirect to="/Login" />;
  }
  const { id } = useParams();

  // console.log('doctors', doctors);
  // const data = selectDoctorById(doctors.data, doctorId);
  // console.log('dataa', data);

  // useEffect(() => {
  //   getDoctor(id)
  //     .then(
  //       (response) => {
  //         setLoading(false);
  //         setData(response.data);
  //       },
  //       (error) => {
  //         setLoading(false);
  //         const message = (error.response
  //           && error.response.data
  //           && error.response.data.message)
  //         || error.message
  //         || error.toString();

  //         setData(message);
  //       },
  //     );
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(id));
  }, [dispatch]);

  const doctor = useSelector((state) => state.doctor);

  return (
    <div className="" key={doctor.id}>
      <div className="text-center">
        {loading && <span className="spinner-border spinner-border-lg" />}
      </div>
      <img src={doctor.image} alt={doctor.name} className="" />
      <p>{doctor.name}</p>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience}</p>
    </div>
  );
};

export default Doctor;

// DoctorList.propTypes = {
//   match: PropTypes.number.isRequired,
// };
