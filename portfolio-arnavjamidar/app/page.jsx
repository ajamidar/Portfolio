import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />
       <Hero /> 
      {/* <Journey /> */}
      {/* <TechStack /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}      
    </main>
  );
}