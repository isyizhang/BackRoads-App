import React from 'react'
import { socialLinks } from '../data'
import Pagelinks from './Pagelinks'
import Sociallink from './Sociallink'
const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" childClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <Sociallink key={link.id} {...link} itemClass="footer-icon" />
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
