import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";
import Update from "./Update";
import Shipments from "./Shipments";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <ProtectedRoutes exact path="/" component={Shipments} />
            <ProtectedRoutes path="/create" component={Create} />
            <ProtectedRoutes path="/update/:id" component={Update} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
