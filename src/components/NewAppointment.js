/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postAppointments } from '../redux/appointmentsSlice';

const NewAppointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.doctors);

  const onChangeDoctorId = (e) => {
    const doctorId = e.target.value;
    setDoctorId(doctorId);
  };

  const onChangeAppointmentDate = (e) => {
    const appointmentDate = e.target.value;
    setAppointmentDate(appointmentDate);
  };

  const doctor_id = doctorId;
  const appointment_date = appointmentDate;

  if (!userData) {
    return <Redirect to="/Login" />;
  }

  const { user_id } = userData;

  const handleBooking = (e) => {
    e.preventDefault();
    setSuccessful(false);

    // eslint-disable-next-line no-underscore-dangle

    dispatch(postAppointments({
      user_id, doctor_id, appointment_date,
    }))
      .then(() => {
        setSuccessful(true);
        alert.show('Appointment created', {
          type: 'success',
          timeout: 2000,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setSuccessful(false);
      });
  };

  const options = data && (
    data.map((doctor) => (
      <option
        key={doctor.id}
        value={doctor.id}
      >
        {doctor.name}
      </option>
    ))
  );

  if (successful) {
    return <Redirect to="/appointments" />;
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleBooking}>
          { !successful && (
          <div>
            <div className="form-group create">
              <label htmlFor="appointmentDate" className="control-label">
                Appointment Date
                <input
                  type="datetime-local"
                  className="form-control"
                  name="appointmentDate"
                  id="appointmentDate"
                  required
                  value={appointmentDate}
                  onChange={onChangeAppointmentDate}
                />
              </label>
            </div>
            <div className="form-group create">
              <label htmlFor="doctorId">
                Select from list:
                <select className="form-control" id="doctorId" onChange={onChangeDoctorId} value={doctorId} selected={doctor_id}>

                  {loading ? <option>Loading..</option> : options }
                </select>
              </label>
            </div>
            <div className="form-group create">
              <button className="btn btn-primary btn-block" disabled={loading} type="submit">
                {loading && (
                <span className="spinner-border spinner-border-sm" />
                )}
                <span>Book</span>
              </button>
            </div>
          </div>
          )}
          {error && (
          <div className="form-group">
            <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
              {error}
            </div>
          </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default NewAppointment;
