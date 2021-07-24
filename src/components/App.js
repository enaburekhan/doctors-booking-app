import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import signUp from '../containers/signUp';
import Appointments from './Appointments';
import DoctorList from './DoctorList';
import DoctorsList from './DoctorsList';
import NavBar from './NavBar';

function App() {
  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={DoctorsList} />
          <Route exact path="/doctors/:doctorId" component={DoctorList} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/signUp" component={signUp} />
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
