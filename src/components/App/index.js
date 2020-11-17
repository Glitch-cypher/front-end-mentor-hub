import "./App.css";
import ChallengePage from "../ChallengePageComponent";
import LoginPage from "../LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "../FrontPage";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <h1 className="page-title">SOC: Mentor Hub</h1>
          <Link className="challenge-title" to="/challengepage">
            WEEKLY CURRICULUM & CHALLENGES
          </Link>
          {/* <Link className="login" to="/login">
            Login / Sign up
          </Link> */}
        </nav>

        <Switch>
          <Route path="/challengepage">
            <ChallengePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
