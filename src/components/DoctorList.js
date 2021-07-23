import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectDoctorById } from '../redux/doctorsSlice';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDoctors } from '../redux/doctorsSlice';

const DoctorList = ({ match }) => {
  const { doctorId } = match.params;

  //   const dispatch = useDispatch();

  //   const { id } = useParams();

  //   useEffect(() => {
  //     const list = dispatch(getDoctors());
  //     console.log('lists', list);
  //   }, [dispatch]);

  const doctor = useSelector((state) => selectDoctorById(state, doctorId));
  console.log('one-doctor', doctor);

  if (!doctor) {
    return (
      <section>
        <h2>Doctor not found!</h2>
      </section>
    );
  }

  return (
    <section className="" key={doctor.id}>
      <img src={doctor.image} alt={doctor.name} className="" />
      <p>{doctor.name}</p>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience}</p>
    </section>
  );
};

export default DoctorList;

DoctorList.propTypes = {
  match: PropTypes.number.isRequired,
};
