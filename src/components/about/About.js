import React from 'react'
import ME from "../../assets/ME-removebg-preview.png"
import {FaAward} from "react-icons/fa"
import {PiProjectorScreenChartFill} from "react-icons/pi"

function About() {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h4>About Me</h4>
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
                <article className='about-card'>
                <PiProjectorScreenChartFill/>
                <h5>Projects</h5>
                </article>
            </div>
            <div>
            <p>Dedicated and skilled Frontend Developer with a strong focus on JavaScript and React.js. Proficient in creating dynamic and responsive user interfaces, I bring creativity and technical expertise to web development projects. Experienced in collaborating with cross-functional teams to deliver high-quality, user-centric solutions. Eager to contribute my frontend development skills to drive innovation and enhance user experiences in the digital landscape.</p>
            </div>
            <div>
                <button>Let's Talk</button>
            </div>
            </div>
        </div>

    </section>
  )
}

export default About