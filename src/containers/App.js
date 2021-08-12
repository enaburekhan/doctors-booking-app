import {
  BrowserRouter as Router, Redirect, Route, Switch,
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
          <Switch>
            <div className="col-9">
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/doctors" component={DoctorsList} />
              <Route exact path="/doctors/:id" component={Doctor} />
              <Route exact path="/appointments/new" component={NewAppointment} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/appointment/:id" component={Appointment} />
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </div>
          </Switch>
        </Router>
      </div>

    </div>

  );
}

export default App;
