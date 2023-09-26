import React from 'react'
import {TbBrandJavascript} from "react-icons/tb"
import{SiHtml5} from "react-icons/si"
import {PiFileCssFill} from "react-icons/pi"
import {SiTailwindcss} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {FaBootstrap} from "react-icons/fa"
import {BsGit} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import "./experience.css"

function Experience() {
  return (
    <section id='experience'>
        <h2>Skills</h2>
        <div className='skills'>
            <div className='skill html'>
            <SiHtml5/>
            <h5>HTML</h5>
            </div>
            <div className='skill html'>
            <PiFileCssFill/>
            <h5>CSS</h5>
            </div>
            <div className='js-con'>
            <TbBrandJavascript/>
            <h5>JavaScript</h5>
            </div>
            <div className='js-con'>
            <GrReactjs/>
            <h5>React</h5>
            </div>
            <div className='js-con'>
            <SiTailwindcss/>
            <h5>Tailwind CSS</h5>
            </div>
            <div className='js-con'>
            <FaBootstrap/>
            <h5>Bootsrap</h5>
            </div>
            <div className='js-con'>
            <BsGit/>
            <h5>Git</h5>
            </div>
            <div className='js-con'>
            <BsGithub/>
            <h5>Github</h5>
            </div>
        </div>
    </section>
  )
}

export default Experience