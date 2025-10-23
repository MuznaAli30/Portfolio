import Header from '../Components/HeaderFooter/Header'
import Footer from '../Components/HeaderFooter/Footer'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Skills from '../Components/Home/Skills'
import Resume from '../Components/Home/Resume'
import Projects from '../Components/Home/Projects'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero id="hero" />
<About id="about" />
<Skills id="skills" />
<Projects id="projects" />
<Resume id="Resume"/>

       <Footer/>
    </div>
  );
}
