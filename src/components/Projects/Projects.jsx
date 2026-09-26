import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {

 useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,

    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
      
      start:"top 80%",
      end:"top 30%"
    }
  })
  
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,

    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
    
      start:"top 80%",
      end:"top 30%"
    }
  })
  
})
  return (
    <div className="projects">
        <h1 id="para">FRESHER BUT 1+ YEARS EXPERINCED IN PROJECTS</h1>
        <div className="slider">
<Card title="VIRTUAL ASSISTANT" image={va}/>
<Card title="AI POWERD FITNESS WEBSITE" image={fw}/>
<Card title="AI CHAT BOX" image={cb}/>
<Card title="AI IMAGE GENERATOR" image={tti}/>
<Card title="AI BACKGROUND REMOVER" image={br}/>
<Card title="IMAGE SEARCH ENGINE" image={ise}/>

        </div>
    </div>
  )
}

export default Projects