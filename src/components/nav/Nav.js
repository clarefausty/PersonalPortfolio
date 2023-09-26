import React from 'react'
import { useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {FaProjectDiagram} from "react-icons/fa"
import {MdContactPhone} from "react-icons/md"

function Nav() {
    const[activeNav, setActiveNav] = useState("#")
  return (
   <nav>
    <a href='#' onClick={()=>setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
    <a href='#project' onClick={()=>setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}><FaProjectDiagram/></a>
    <a href='#contact'onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdContactPhone/></a>
   </nav>
  )
}

export default Nav