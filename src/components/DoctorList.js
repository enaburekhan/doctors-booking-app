import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
// import { getDoctors } from '../redux/doctorsSlice';
import { userAuth } from '../redux/userSlice';

const DoctorList = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const { user: currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return <Redirect to="/Login" />;
  }
  const { doctorId } = useParams();
  useEffect(() => {
    userAuth(doctorId).then(
      (response) => {
        setLoading(false);
        const loop = setData(response.data);
        console.log('response-data', loop);
      },
      (error) => {
        setLoading(false);
        const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

        setData(message);
      },
    );
  }, []);

  return (
    <section className="" key={data.id}>
      <div className="text-center">
        {loading && <span className="spinner-border spinner-border-lg" />}
      </div>
      <img src={data.image} alt={data.name} className="" />
      <p>{data.name}</p>
      <p>{data.specialization}</p>
      <p>{data.experience}</p>
    </section>
  );
};

export default DoctorList;

// DoctorList.propTypes = {
//   match: PropTypes.number.isRequired,
// };
