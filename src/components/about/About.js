import React from 'react'
import "./about.css"
import ME from "../../assets/MI-removebg-preview.png"
import {FaAward} from "react-icons/fa"
import {PiProjectorScreenChartFill} from "react-icons/pi"

function About() {
  return (
    <section id='about' className='container section'>
        <h5>Get to know</h5>
        <h5>About Me</h5>
        <div className='about-container'>
            <div className='about-me'>
                <img src={ME} alt='Me'/>
            </div>
            <div className='about-content'>
            <div className='about-cards'>
                <article className='about-card'>
                <FaAward/>
                <h5>Experience</h5>
                <small>2+ years working</small>
                </article>
                <article id='project'  className='about-card'>
                <a href='https://docs.google.com/document/u/0/d/1V19V_yd7lgilcV1Pccy2o5Dkyp8VJkd4SECcgdHWip0/edit'>
                <PiProjectorScreenChartFill/>
                <h5>Projects</h5>
                <small>Link to my projects</small>
                </a>
                </article>
            </div>
            <div className='about-text'>
            <p>Dedicated and skilled Frontend Developer with a strong focus on JavaScript and React.js. Proficient in creating dynamic and responsive user interfaces, I bring creativity and technical expertise to web development projects. Experienced in collaborating with cross-functional teams to deliver high-quality, user-centric solutions. Eager to contribute my frontend development skills to drive innovation and enhance user experiences in the digital landscape.</p>
            </div>
            <div className='talk-btn'>
               <a href='#contact'> <button>Let's Talk</button></a>
            </div>
            </div>
        </div>

    </section>
  )
}

export default About