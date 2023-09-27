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
    <section className='container experience section' id='experience'>
        <div className='skills-con'>
        <h1>Skills</h1>
        <div className='skills'>
            <div className='skill html'>
            <SiHtml5 className='icon'/>
            <h5>HTML</h5>
            </div>
            <div className='skill css'>
            <PiFileCssFill className='icon'/>
            <h5>CSS</h5>
            </div>
            <div className='skill js'>
            <TbBrandJavascript className='icon'/>
            <h5>JavaScript</h5>
            </div>
            <div className='skill react'>
            <GrReactjs className='icon'/>
            <h5>React</h5>
            </div>
            <div className='skill tailwind'>
            <SiTailwindcss className='icon'/>
            <h5>Tailwind</h5>
            </div>
            <div className='skill bootstrap'>
            <FaBootstrap className='icon'/>
            <h5>Bootsrap</h5>
            </div>
            <div className='skill git'>
            <BsGit className='icon'/>
            <h5>Git</h5>
            </div>
            <div className='skill github'>
            <BsGithub className='icon'/>
            <h5>Github</h5>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience