import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f3]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <Education />
        <Contact />
        </main>
        <Footer />

        <ScrollButtons />
    </div>
     
  );
}

export default App;