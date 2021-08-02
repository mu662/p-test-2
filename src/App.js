import './App.css';
import RegisterComponent from './components/Register';
import List from './components/List';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterComponent} />
        <Route path="/login" component={Login} />
        <Route path="/" component={List} />
      </Switch>
    </Router>
  );
}

export default App;
