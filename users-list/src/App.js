import Home from "./Components/Home/Home";
import AddUsers from "./Components/Users/AddUsers";
import EditUsers from "./Components/Users/EditUsers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/addUsers" render={() => <AddUsers />} />
        <Route path="/editUsers/:id" render={(props) => <EditUsers {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
