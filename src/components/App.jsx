import About from './about/About';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Testimonials from './testimonials/Testimonials';
import Social from './social/Social';


function App() {
  return (
    <div>
      <Navbar />
      <About />,
      <Contact />,
      <Projects />,
      <Skills />,
      <Testimonials />
      <Social />
    </div>
  );
}

export default App
