import './App.css';
// import Cities from './pages/Cities';
import Locations from "./pages/Locations";
import Cities from "./pages/Cities";
import { Route, Switch } from 'react-router-dom';
import SingleLocation from './pages/SingleLocation';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/locations/:slug" component={SingleLocation} />
      <Route exact path="/cities" component={Cities} />
      {/* <Route component={Error} /> */}
    </Switch>
    </div>
  );
}

export default App;
