import { CV } from '../CV/cv';
import About from './about/About';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Education from './education/Education';
import Social from './social/Social';


function App() {
  const { profile, education, experience, lenguages, habilities } = CV;


  return (
    <div>
      <Navbar />
      <About data={profile} />
      <Education education={education}/>
      <Contact contact={profile}/>
      <Projects experience={experience}/>
      <Skills lenguages={lenguages} habilities={habilities}/>
      <Social social={profile}/>
    </div>
  );
}

export default App
