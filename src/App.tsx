import NavBar from './components/Navbar.tsx'
import Home from './sections/Home.tsx'
import Projects from './sections/Projects.tsx'
import Experience from './sections/Experience.tsx'
import Card from './components/Card.tsx'
import type { Project } from './components/Card.tsx'


function App() {

  const project: Project = {
    href: "https://example.com",
    backgroundImage: "https://example.com/image.jpg",
    title: "Sample Project",
    tag: "Web Development",
    description: "A sample project showcasing a modern web application.",
    altText: "Sample project background image",
  };

  return (
    <div>
      <NavBar></NavBar>
      <Card project={project} />
      <div id="home"><Home/></div>
      <div id="projects"><Projects/></div>
      <div id="experience"><Experience/></div>
      
    </div>
  )
}

export default App
