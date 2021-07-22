import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const DoctorList = ({ match }) => {
  const { doctorId } = match.params;

  const doctor = useSelector((state) => state.doctors.find((doctor) => doctor.id === doctorId));

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
