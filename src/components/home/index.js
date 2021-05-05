import React from 'react'
import './style.scss'

const Home = React.forwardRef((props, homeRef) => {
  return <div id="home" className="home" ref={homeRef}>Home</div>
})

export default Home