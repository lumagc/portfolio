import "./App.css";
import { Nav, Presentation, AboutMe, Academics, Skills, Portfolio, Utilities, ContactMe } from "./components"
import { CV } from "./CV/Cv"; 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const { aboutMe, academics, portfolio, skills, utility } = CV;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Nav/>
        </header>
        <main className="main">
          <Routes>
            <Route exact path="/" element={ <Presentation aboutMe={aboutMe} />}/>
            <Route path="/aboutMe" element={ <AboutMe aboutMe={aboutMe}/>}/>
            <Route path="/academics" element={ <Academics academics={academics} /> }/>
            <Route path="/skills" element={ <Skills skills={skills} /> }/>
            <Route path="/portfolio" element={ <Portfolio portfolio={portfolio} /> }/>
            <Route path="/utilities" element={ <Utilities utility={utility} />}/>
            <Route path="/contactme" element={ <ContactMe aboutMe={aboutMe} /> }/>
          </Routes>
        </main>
        <footer className="footer">
          <p>Creado por Lucía Mariane Gutiérrez Castro (lumagc_zzz)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
