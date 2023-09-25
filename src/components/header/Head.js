import React from 'react'
import CV from "../../assets/Resume.pdf"
import "./head.css"
import {BsGithub} from "react-icons/bs"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

function Head() {
  return (
    <div>
        <h5>Hello, I'm</h5>
        <h1>Chinwendu Faustina (Clarefausty)</h1>
        <h5>Frontend Developer</h5>
        <div className='head-btn' >
            <a download className='cv-btn' href={CV}>Download CV</a>
            <a className='talk-btn' href='#contact'>Let's Talk</a>
        </div>
        <div className='head-section2'>
            <div>
                <BsGithub/>
                <AiFillTwitterSquare/>
                <AiFillLinkedin/>
            </div>
        </div>
    </div>
  )
}

export default Head