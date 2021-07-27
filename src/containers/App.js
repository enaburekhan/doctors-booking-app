import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Appointments from '../components/Appointments';
import DoctorList from '../components/DoctorList';
import DoctorsList from '../components/DoctorsList';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <PrivateRoute exact path="/doctors" component={DoctorsList} />
          <PrivateRoute exact path="/doctors/:doctorId" component={DoctorList} />
          <PrivateRoute exact path="/appointments" component={Appointments} />
          <Redirect to="/doctors" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
