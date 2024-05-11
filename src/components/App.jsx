import { CV } from '../CV/cv';
import About from './about/About';
import Navbar from './navbar/Navbar';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Education from './education/Education';
import Social from './social/Social';

function App() {
  const { profile, education, experience, lenguages, habilities, images } = CV;


  return (
    <div className='div'>
      <Navbar images={images} profile={profile}/>
      <About data={profile} />
      <Education education={education} images={images} />
      <Projects experience={experience}/>
      <Skills lenguages={lenguages} habilities={habilities}/>
      <Social social={profile}/>
    </div>
  );
}

export default App
