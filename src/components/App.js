import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorsList from './DoctorsList';

function App() {
  return (

    <div className="App">
      <Router>
        <DoctorsList />
        <Switch>
          <Route />
          <Route />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
