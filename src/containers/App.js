import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Appointments from '../components/Appointments';
import Doctor from '../components/Doctor';
import DoctorsList from '../components/DoctorsList';
import Login from './Login';
import Logout from '../components/Logout';
import NavBar from '../components/NavBar';
import NewAppointment from '../components/NewAppointment';
import DeleteAppointment from '../components/DeleteAppointment';

function App() {
  return (

    <div className="App">
      <Router>
        <Logout />
        <NavBar />
        <Switch>
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/doctors" component={DoctorsList} />
          <Route exact path="/doctors/:id" component={Doctor} />
          <Route exact path="/appointments/new" component={NewAppointment} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/:id" component={DeleteAppointment} />
          <Redirect to="/doctors" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
