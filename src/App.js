import { Switch, Route, Redirect} from "react-router-dom";

import {Header} from "./components/Header";
import {Home, Portfolio, Contact} from "./pages";
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
