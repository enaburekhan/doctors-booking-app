import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { useAlert } from 'react-alert';
// import CheckButton from 'react-validation/build/button';
import { postAppointments } from '../redux/appointmentsSlice';
import { getDoctors } from '../redux/doctorsSlice';

const NewAppointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const checkBtn = useRef;
  //   const form = useRef();
  const { data: userData } = useSelector((state) => state.user);
  console.log('userData', userData);
  //   const location = useLocation();
  const dispatch = useDispatch();
  //   const alert = useAlert();
  const { data, error } = useSelector((state) => state.doctors);
  console.log('data', data);
  useEffect(() => {
    // if (location.doctorId) {
    //   setDoctorId(location.doctorId);
    // } else {
    //   setDoctorId(1);
    // }
    if (data === null && userData) {
      dispatch(getDoctors())
        .then(() => {
          loading(false);
        })
        .catch(() => {
        //   setError('Unable to get doctors list');
        });
    }
  }, [data, dispatch]);

  const onChangeDoctorId = (e) => {
    const doctorId = e.target.value;
    setDoctorId(doctorId);
    console.log('doctorUnchange', doctorId);
  };

  const onChangeAppointmentDate = (e) => {
    const appointmentDate = e.target.value;
    setAppointmentDate(appointmentDate);
    console.log('apptntmentonchange', appointmentDate);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setSuccessful(false);

    // form.current.validateAll();

    // eslint-disable-next-line no-underscore-dangle

    dispatch(postAppointments(userData.user_id, doctorId, appointmentDate))
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
    console.log('userdataId', userData.user_id);
  };

  console.log('data now', data);
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

  if (!userData) {
    return <Redirect to="/login" />;
  }
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
                  type="date"
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
                <select className="form-control" id="doctorId" onChange={onChangeDoctorId} value={doctorId}>
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
          {/* <CheckButton style={{ display: 'none' }} ref={checkBtn} /> */}
        </form>
      </div>
    </div>
  );
};
export default NewAppointment;
