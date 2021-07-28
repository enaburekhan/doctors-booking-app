import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Appointments from '../components/Appointments';
import Doctor from '../components/Doctor';
import DoctorsList from '../components/DoctorsList';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Logout from '../components/Logout';

function App() {
  return (

    <div className="App">
      <Router>
        <Logout />
        <Switch>
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <PrivateRoute exact path="/doctors" component={DoctorsList} />
          <PrivateRoute exact path="/doctors/:doctorId" component={Doctor} />
          <PrivateRoute exact path="/appointments" component={Appointments} />
          <Redirect to="/doctors" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
