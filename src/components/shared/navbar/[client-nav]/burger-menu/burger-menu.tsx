'use client'
import { useState } from "react"
import './burger-menu.css'

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="cont-link">
        <button className="nav-link" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-bars text-xl"></i>
          <h4>More</h4>
        </button>
      </div>

      {open && (
        <div className="overlay">
          <button className="closebtn" onClick={() => setOpen(false)}>
            &times;
          </button>
          <div className="overlay-content">
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            <a href="/feedback">Feedback&Support</a>
          </div>
        </div>
      )}
    </>
  )
}

export {BurgerMenu}
