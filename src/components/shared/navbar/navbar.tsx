import { BurgerMenu } from './[client-nav]/burger-menu/burger-menu'
import { PlusButton } from './[client-nav]/plus-button/plus-button'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <div className="cont-link">
        <a href="/" className="nav-link">
          <i className="fa-solid fa-house"></i>
          <h4>Home</h4>
        </a>
      </div>
      <div className="cont-link">
        <a href="/about" className="nav-link">
          <i className="fa-regular fa-address-card"></i>
          <h4>About</h4>
        </a>
      </div>
      <PlusButton />
      <div className="cont-link">
        <a href="/projects" className="nav-link">
          <i className="fa-solid fa-book-open text-lg"></i>
          <h4>Projects</h4>
        </a>
      </div>
      <BurgerMenu />
    </div>
  )
}

export { Navbar }
