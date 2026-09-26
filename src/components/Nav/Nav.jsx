import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
import{useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Nav() {
  let menu=useRef()
  let mobile=useRef()

  function closeMobileMenu() {
    mobile.current.classList.remove("activemobile")
    menu.current.classList.remove("activeham")
  }

useGSAP(()=>{
  let tl = gsap.timeline()
tl.from("nav h1",{
  y:-100,
  duration:1,
  opacity:0
})
tl.from("nav ul li",
  {
    y:-100,
  duration:1,
  opacity:0,
  stagger:1
  }
)

})


  return (
    <nav>
        <h1> PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link key="home" to="home" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}><li>Home</li></Link>
            <Link key="about" to="about" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}><li>About</li></Link>
            <Link key="projects" to="projects" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}><li>Projects</li></Link>
            <Link key="contact" to="contact" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}><li>Contact</li></Link>
        </ul>
         <div className="hamburger" ref={menu} onClick={()=>{
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")
         }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
         </div>
        <ul className='mobilemenu' ref={mobile}>
          <Link key="mobile-home" to="home" activeClass="active" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}><li>Home</li></Link>
          <Link key="mobile-about" to="about" activeClass="active" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}><li>About</li></Link>
          <Link key="mobile-projects" to="projects" activeClass="active" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}><li>Projects</li></Link>
          <Link key="mobile-contact" to="contact" activeClass="active" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav