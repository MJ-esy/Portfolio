import Navbar   from "@/components/sections/Navbar";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import Resume   from "@/components/sections/Resume";
import Projects from "@/components/Projects";
import Contact  from "@/components/sections/Contact";
import Footer   from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Index;
