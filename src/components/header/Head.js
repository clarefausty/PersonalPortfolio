import React from 'react'
import CV from "../../assets/Resume.pdf"
import "./head.css"

function Head() {
  return (
    <div>
        <h5>Hello, I'm</h5>
        <h1>Chinwendu Faustina (Clarefausty)</h1>
        <h5>Frontend Developer</h5>
        <div >
            <a href={CV}>Download CV</a>
            <a href='#contact'>Let's Talk</a>
        </div>
    </div>
  )
}

export default Head