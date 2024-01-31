import "./App.css";
// import Access from './components/access.jsx';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import CrearUserForm from "./components/CrearUserForm/CrearUserForm.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact stric path="/">
          <Home />
        </Route>
        <Route path="/crear">
          <CrearUserForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
