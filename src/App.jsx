import { useState } from 'react'
import './App.css'

function App() {

  const pages = [
    {
      name: "pink",
      bg: "#b23257",
      image: "./public/pink.png",
      pass: "./public/rosa.png"
    },
    {
      name: "black",
      bg: "#383838",
      image: "./public/black.png",
      pass: "./public/preto.png"
    },
    {
      name: "red",
      bg: "#720000",
      image: "./public/red.png",
      pass: "./public/verme.png"
    }
  ]

  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState("next");


  const next = () => {
    setDirection('next')
    setCurrent(current === pages.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setDirection('prev')
    setCurrent(current === 0 ? pages.length - 1 : current - 1)
  }

  // indices calculator do preview
    const prevIndex =
    current === 0 ? pages.length - 1 : current - 1;

   const nextIndex =
    current === pages.length - 1 ? 0 : current + 1;

  return (
    <div className='master' style={{ backgroundColor: pages[current].bg }}>

      <h1 className='title' key={current} style={{
        animation: "titleUp 0.6s ease forwards"
      }}>monster</h1>
      <img className='img' src={pages[current].image} alt="" key={current} style={{
        animation: direction === "next"
          ? "slideFromRight 0.6s forwards"
          : "slideFromLeft 0.6s forwards"
      }} />


      <div className='prev' onClick={prev}>
        <img src={pages[prevIndex].pass} alt="" />
      </div>

      <div className='next' onClick={next}>
        <img src={pages[nextIndex].pass} alt="" />
      </div>

      <div className='number'>
        <p>{current + 1}</p>
      </div>
      
      <div className="indicators">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`bar ${current === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
