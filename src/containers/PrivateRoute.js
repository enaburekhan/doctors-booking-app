import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token');

  return token ? (
    <>
      <NavBar />
      <Component />

    </>
  )
    : <Redirect to={{ pathname: '/Login' }} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
