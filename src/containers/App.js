import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Appointments from '../components/Appointments';
import DoctorList from '../components/DoctorList';
import DoctorsList from '../components/DoctorsList';
import NavBar from '../components/NavBar';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/doctors" component={DoctorsList} />
          <Route exact path="/doctors/:doctorId" component={DoctorList} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <PrivateRoute component={DoctorsList} />
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
