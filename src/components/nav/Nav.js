import React from 'react'
import { useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {FaProjectDiagram} from "react-icons/fa"
import {MdContactPhone} from "react-icons/md"
import {GiSkills} from "react-icons/gi"

function Nav() {
    const[activeNav, setActiveNav] = useState("#")
  return (
   <nav>
    <a href='#home' onClick={()=>setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GiSkills/></a>
    <a href='#project' onClick={()=>setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}><FaProjectDiagram/></a>
    <a href='#contact'onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdContactPhone/></a>
   </nav>
  )
}

export default Nav