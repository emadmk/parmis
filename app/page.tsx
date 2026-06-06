import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "طنین ارتباط پارمیس",
  alternateName: "Tanin Ertebat Parmis",
  url: "https://teparmis.ir",
  logo: "https://teparmis.ir/brand/icon-256.png",
  email: "info@teparmis.ir",
  telephone: "+98-21-24871000",
  faxNumber: "+98-21-24871211",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "North Majidieh, Mansouri St., Mahabadipour St., No. 28, Floor 2",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  areaServed: "IR",
  knowsAbout: [
    "Telecommunications",
    "SCADA",
    "Telemetry",
    "Industrial Automation",
    "Microwave Networks",
    "Fiber Optic",
    "Radio Networks",
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
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
