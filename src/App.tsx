import NavBar from './components/Navbar.tsx'
import Home from './sections/Home.tsx'
import Projects from './sections/Projects.tsx'
import Experience from './sections/Experience.tsx'
import Card from './components/Card.tsx'
import type { Project } from './components/Card.tsx'


function App() {

  return (
    <div>
      <NavBar></NavBar>
      <div id="home"><Home/></div>
      <div id="projects"><Projects/></div>
      <div id="experience"><Experience/></div>
      
    </div>
  )
}

export default App
