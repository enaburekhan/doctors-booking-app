// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { selectDoctorById } from '../redux/doctorsSlice';
// import { getDoctors } from '../redux/doctorsSlice';
// import { userAuth } from '../redux/userSlice';

const Doctor = () => {
  // const [data, setData] = useState('');
  // const [loading, _setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctors);

  if (!user) {
    return <Redirect to="/Login" />;
  }
  const { doctorId } = useParams();

  console.log('doctors', doctors);
  const data = selectDoctorById(doctors.data, doctorId);
  console.log('dataa', data);

  // useEffect(() => {
  //   userAuth(doctorId)
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

  return (
    <div className="" key={data.id}>
      <div className="text-center">
        {/* {loading && <span className="spinner-border spinner-border-lg" />} */}
      </div>
      <img src={data.image} alt={data.name} className="" />
      <p>{data.name}</p>
      <p>{data.specialization}</p>
      <p>{data.experience}</p>
    </div>
  );
};

export default Doctor;

// DoctorList.propTypes = {
//   match: PropTypes.number.isRequired,
// };
