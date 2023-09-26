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
    <a href='#'><AiOutlineHome/></a>
    <a href='#about'><AiOutlineUser/></a>
    <a href='#project'><FaProjectDiagram/></a>
    <a href='contact#'><MdContactPhone/></a>
   </nav>
  )
}

export default Nav