import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
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
          <Redirect to="/" />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
