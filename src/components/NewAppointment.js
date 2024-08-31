/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useAlert } from 'react-alert';
import { postAppointments } from '../redux/appointmentsSlice';
import { getDoctors } from '../redux/doctorsSlice';

const NewAppointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: userData } = useSelector((state) => state.user);
  const {
    data: doctors,
    loading: doctorsLoading,
    error: doctorsError,
  } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  // const alert = useAlert();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        // Set loading state to true
        dispatch({ type: 'DOCTORS_FETCH_PENDING' });
        // Fetch doctors
        const fetchedDoctors = await dispatch(getDoctors());

        if (isMounted) {
          // Update state with fetched doctors
          dispatch({ type: 'DOCTORS_FETCH_SUCCESS', payload: fetchedDoctors });
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          // Update state with error message
          dispatch({ type: 'DOCTORS_FETCH_ERROR', payload: error.message });
        }
      }
    };

    // Call fetchData function when component mounts
    fetchData();

    // Clean up function to cancel any ongoing tasks
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const onChangeDoctorId = (e) => {
    setDoctorId(e.target.value);
  };

  const onChangeAppointmentDate = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);

    // eslint-disable-next-line no-underscore-dangle

    dispatch(
      postAppointments({
        user_id: userData.user_id,
        doctor_id: doctorId,
        appointment_date: appointmentDate,
      }),
    )
      .then(() => {
        setSuccessful(true);
        toast.success('Appointment created', {
          type: 'success',
          timeout: 2000,
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Failed to create appointment', {
          type: 'error',
          timeout: 2000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!userData) {
    return <Navigate to="/Login" />;
  }

  if (successful) {
    return <Navigate to="/appointments" />;
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleBooking}>
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
                <select value={doctorId} onChange={onChangeDoctorId}>
                  <option value="">Select a doctor</option>
                  {doctorsLoading ? <option>Loading..</option> : doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group create">
              <button
                className="btn btn-primary btn-block"
                disabled={loading}
                type="submit"
              >
                {loading && (
                <span className="spinner-border spinner-border-sm" />
                )}
                <span>Book</span>
              </button>
            </div>
          </div>

          {doctorsError && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                Failed to fetch doctors
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default NewAppointment;
