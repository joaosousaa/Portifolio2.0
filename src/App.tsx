
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Showwcase from "./components/Showcase/Showcase";

function App() {
  return (
    <>
      <section id="Início">
        <Header />
      </section>

      <section id="Sobre">
        <About />
      </section>

      <section id="Projetos">
        <Showwcase />
        
      </section>

      <section id="footer">
        <Footer />
      </section>
      
    </>
  );
}

export default App;
