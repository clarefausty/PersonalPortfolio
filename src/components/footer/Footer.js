import React from 'react'
import {BsGithub} from "react-icons/bs"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import "./footer.css"
import Marquee from 'react-fast-marquee'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className='footer-handles'>
                <a href='https://github.com/clarefausty'><BsGithub/></a>
                <a href='https://twitter.com/ChinwenduFausty'><AiFillTwitterSquare/></a>
                <a href='https://www.linkedin.com/in/chinwenduachilonu/'><AiFillLinkedin/></a>
            <div className='footer-p'>
              <Marquee>  @{currentYear} clarefausty </Marquee>
            </div>
            
            </div>
    </footer>
    
  )
}

export default Footer