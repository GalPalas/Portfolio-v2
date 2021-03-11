import "./App.css";
import Header from "./components/Home/header";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Work from "./components/work/work";
import Footer from "./components/Contact/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
