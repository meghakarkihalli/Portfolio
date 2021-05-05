import React, { useRef } from 'react'
import NavBar from '@local/navbar'
import Home from '@local/home'
import Resume from '@local/resume'
import Footer from '@local/footer'
import './App.css'

function App() {
  const homeRef = useRef(null)
  const resumeRef = useRef(null)
  return (
    <div className='App'>
      <NavBar
        homeRef={homeRef}
        resumeRef={resumeRef}
      />
      <Home ref={homeRef} />
      <Resume ref={resumeRef} />
      <Footer />
    </div>
  )
}

export default App
