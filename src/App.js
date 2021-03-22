import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Home/navbar";
import Pages from "./components/pages";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Work from "./components/work/work";
import Footer from "./components/Contact/footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Pages />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/connect">
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
