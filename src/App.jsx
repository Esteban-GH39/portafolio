import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BracketRail from './components/BracketRail'
import FlowBackground from './components/FlowBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FlowBackground />
      <Navbar />
      <BracketRail />
      {/* z-10: el contenido queda por encima del fondo animado */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
