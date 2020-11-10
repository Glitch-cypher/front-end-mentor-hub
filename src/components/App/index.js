import "./App.css";
import ChallengePage from "../ChallengePageComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <h1 className="page-title">SOC: Mentor Hub</h1>
          <Link to="/challengepage">Challenges</Link>
        </nav>
        <Switch>
          <Route path="/challengepage">
            <ChallengePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
