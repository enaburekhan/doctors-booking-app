import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Appointments from '../components/Appointments';
import Doctor from '../components/Doctor';
import DoctorsList from '../components/DoctorsList';
import Login from './Login';
import NavBar from '../components/NavBar';
import NewAppointment from '../components/NewAppointment';
import Appointment from '../components/Appointment';
import Home from '../components/Home';

function App() {
  return (

    <div className="container">
      <div className="row">
        <Router>
          <div className="col-3">
            <NavBar />
          </div>
          <div className="col-9">
            <Routes>

              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/doctors" element={<DoctorsList />} />
              <Route path="/doctors/:id" element={<Doctor />} />
              <Route path="/appointments/new" element={<NewAppointment />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/appointment/:id" element={<Appointment />} />
              <Route path="/" element={<Home />} />

            </Routes>
          </div>

        </Router>
      </div>

    </div>

  );
}

export default App;
