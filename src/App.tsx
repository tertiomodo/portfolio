import Header from "@modules/Header/Header";
import Hero from "@modules/Hero/Hero";
import Projects from "@modules/Projects/Projects";
import Skills from "@modules/Skills/Skills";
import Footer from "@modules/Footer/Footer";
import { projects, skills } from "@data";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills skills={skills} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
