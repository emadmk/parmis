import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Expertise />
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}
