import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from '../containers/login';
import Signup from '../containers/signup';

const NavBar = () => (
  <nav className="navbar">
    <Router>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Signup} path="/signup" />
      </Switch>
    </Router>
  </nav>
);

export default NavBar;
