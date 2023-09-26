import React from 'react'
import CV from "../../assets/Resume.pdf"
import "./head.css"
import {BsGithub} from "react-icons/bs"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import ME from "../../assets/MI-removebg-preview.png"

function Head() {
  return (
    <header className='container'>
    <div className='head-con'>
        <h5>Hello, I'm</h5>
        <h1>Chinwendu Faustina (Clarefausty)</h1>
        <h5>Frontend Developer</h5>
        <div className='head-btn' >
            <a download className='cv-btn' href={CV}>Download CV</a>
            <a className='talk-btn' href='#contact'>Let's Talk</a>
        </div>
        <div className='head-section2'>
            <div className='handles'>
                <a href='https://github.com/clarefausty'><BsGithub/></a>
                <a href='https://twitter.com/ChinwenduFausty'><AiFillTwitterSquare/></a>
                <a href='https://www.linkedin.com/in/chinwenduachilonu/'><AiFillLinkedin/></a>
            </div>
            <div className='me-con'>
                <img src={ME} alt='Me'/>
            </div>
            <div className='scroll'>
            <a href='#contact'>Scroll Down</a>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Head