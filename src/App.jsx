import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/contact';
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
