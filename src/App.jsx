import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";


const App = () => {
  return (
    <div className=" overflow-hidden text-neutral-800 dark:bg-black dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      
      <div className="container mx-auto px-8">
        
        <Hero/>
        <About/>
        <Technologies/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App