import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../containers/Signup';
import Appointments from './Appointments';
import DoctorList from './DoctorList';
import DoctorsList from './DoctorsList';
import NavBar from './NavBar';
import Login from '../containers/Login';

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
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
