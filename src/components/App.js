import DoctorsList from './DoctorsList';
import NavBar from './NavBar';

function App() {
  return (

    <div className="App">
      <NavBar />
      <div className="content">

        <DoctorsList />
      </div>
    </div>

  );
}

export default App;
