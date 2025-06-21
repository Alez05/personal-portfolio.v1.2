'use client'
import { useEffect, useRef, useState } from 'react'
import './plus-button.css'

export const PlusButton = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setOpen(prev => !prev)

useEffect(() => {
  const menu = menuRef.current
  if (!menu) return

  const icons = menu.querySelectorAll('.circle')
  const count = icons.length

  const radius = 120 // distance from center (adjust this)
  const arcStart = Math.PI * 0.75  // 135°
  const arcEnd = Math.PI * 0.25    // 45°
  const arcRange = arcStart - arcEnd

  icons.forEach((icon, i) => {
    const angle = arcStart - (arcRange / (count - 1)) * i
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    const el = icon as HTMLElement
    if (open) {
      el.style.transform = `translate(${x}px, ${-y}px)`
      el.style.opacity = '1'
      el.style.pointerEvents = 'auto'
    } else {
      el.style.transform = `translate(0, 0)`
      el.style.opacity = '0'
      el.style.pointerEvents = 'none'
    }
  })
}, [open])

  return (
    <div className="cont-plus-wrapper">
      <div className="cont-plus" onClick={toggleMenu}>
        <i className="fa-solid fa-plus"></i>
      <div className="radial-menu" ref={menuRef}>
        <a href="https://instagram.com/yourusername" className="circle" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/yourusername" className="circle" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" className="circle" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:your@email.com" className="circle">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      </div>

    </div>
  )
}
