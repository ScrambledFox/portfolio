import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import IdentityAndVision from './components/identityAndVision/IdentityAndVision'
import Development from './components/development/Development'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Future from './components/future/Future'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <IdentityAndVision />
      <Development />
      <Future />
      <Experience />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
