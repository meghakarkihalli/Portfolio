import React from 'react'
import './style.scss'

import IntroTitle from './intro-title'
import ImageTitle from './image-title'

const Home = React.forwardRef((props, homeRef) => {
  return (
    <div className="home">
      <div id="home" className="home__container" ref={homeRef}>
        <ImageTitle />
        <IntroTitle />
      </div>
    </div>
  )
})

export default Home