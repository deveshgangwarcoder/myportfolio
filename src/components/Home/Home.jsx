import { useEffect, useState } from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const typingTexts = ["JAVA FULL STACK DEVELOPER", "WEB DEVELOPER", "SOFTWARE DEVELOPER"]

function TypingEffect() {
  const [text, setText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]
    const delay = isDeleting ? 50 : text.length === currentText.length ? 1000 : 100
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentText) {
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setTextIndex((index) => (index + 1) % typingTexts.length)
      } else {
        setText(currentText.slice(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isDeleting, text, textIndex])

  return <span>{text}_</span>
}

function Home() {

useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",
    {
      y:80,
      duration:1,
      opacity:0
    }
  )
    tl1.from(".line2",
    {
      y:80,
      duration:1,
      opacity:0
    }
  )

    tl1.from(".line3",
    {
      y:80,
      duration:1,
      opacity:0
    }
  )
 gsap.from(".righthome img",{
   x:200,
      duration:1,
      opacity:0
 })
 

})

  return (
    <div id="home">
      <div className="lefthome">
<div className="homedetails">
  <div className="line1">I'M</div>
  <div className="line2">DEVESH GANGWAR</div>
  <div className="line3">
<TypingEffect />
  </div>
  <button>HIRE ME</button>
</div>
      </div>

<div className="righthome">
  <img src={man} alt="" />
</div>
    </div>
  )
}

export default Home