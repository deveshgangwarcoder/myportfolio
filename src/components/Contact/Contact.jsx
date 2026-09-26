import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Contact() {
  useGSAP(()=>{
  gsap.from(".leftcontact img",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,

    scrollTrigger:{
      trigger:".leftcontact img",
      scroll:"body",
      scrub:2,
    
      start:"top 80%",
      end:"top 30%"
    }
  })
  gsap.from(".rightcontact",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,

    scrollTrigger:{
      trigger:".rightcontact",
      scroll:"body",
      scrub:2,
    
      start:"top 80%",
      end:"top 30%"
    }
  })
})
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>

      <div className="rightcontact">
        <form action="https://formspree.io/f/mkjgzbgj" method="POST">
          <input
            name="Username"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="Email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="textarea"
            placeholder="Message me"
            required
          ></textarea>
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact