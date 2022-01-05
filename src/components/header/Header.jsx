import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo-black.svg';

function Header() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);
  return (
    <header>
      <div className="logo" onClick={closeMobileMenu}>
        <img src={logo} alt="logo" />
      </div>
      <div className="menuIcon">
        <i
          className={click ? 'fas fa-times' : 'fas fa-bars'}
          onClick={handleClick}
        ></i>
      </div>

      <ul className={click ? 'navbar active' : 'navbar'}>
        <li>
          <a
            href=" https://www.facebook.com/profile.php?id=100074335006776"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            href=" http://twitter.com/nuelSBN"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://www.linkedin.com/in/emmanuel-igwenagu-a5918b218/"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://www.instagram.com/nuelsbn/"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://github.com/nuelSBN"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-git"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://wa.me/2348130927634"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            href=" tel:+234-813-092-7634"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fas fa-phone"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
