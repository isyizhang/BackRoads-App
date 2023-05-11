import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import Pagelinks from './Pagelinks'
import Sociallink from './Sociallink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <Pagelinks parentClass="nav-links" childClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <Sociallink key={link.id} {...link} itemClass="nav-icon" />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
