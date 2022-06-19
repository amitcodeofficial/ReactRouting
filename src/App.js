import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Dashboard from "./components/dashboard-component/Dashboard";
import Home from "./components/home-component/Home";
import About from "./components/about-component/About";
import Settings from "./components/settings-component/Settings";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
        </div>
    </Router>
  );
}

export default App;
