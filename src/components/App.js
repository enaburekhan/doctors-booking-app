import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path='/doctors' component={doctors}/>
          </Switch>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
