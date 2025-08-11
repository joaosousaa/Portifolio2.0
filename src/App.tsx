
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Showwcase from "./components/Showcase/Showcase";
import Contact from "./components/Contact/Contact"
import Techs from "./components/Techs/Techs";

function App() {
  return (
    <>
      <section id="Início">
        <Header />
      </section>

      <section id="Sobre" >
        <About />
      </section>

      <section id="Projetos">
        <Showwcase />
      </section>

      <section id="Habilidades">
        <Techs />
      </section>
      <section className="bg-gradient-to-bl from-gray-100 via-gray-100/80 to-blue-600/40">

        <section id="Contato">
          <Contact />
        </section>

        <section id="Footer">
          <Footer />
        </section>
      </section>

    </>
  );
}

export default App;
