import NavbarH from "./Common/NavbarH";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Main from "./Main";

function App() {
  return (
    <div >
    <NavbarH />
    <Main />
    <About />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
