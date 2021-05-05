import React from 'react'
import './style.scss'

const Resume = React.forwardRef((props, resumeRef) => <div id="resume" ref={resumeRef} className="resume">Resume</div>)

export default Resume