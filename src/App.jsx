import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="container">
      <Profile />
      <About />
      {/* <Experience /> */}
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
