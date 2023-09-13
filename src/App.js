import "./styles.css";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Error from "./pages/error";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/"> {/*pointing to home page */}
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="*">
            <h1>Oops! Sorry page not found!</h1>
            <Error />
          </Route>
        </Switch>
      </main>
    </div>
  );
}