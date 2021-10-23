import * as React from 'react'
import * as CSS from './layout.module.css'

const Nav = () => {

    return (
    <nav>
        <ul className={CSS.navLinks}>
          <li className={CSS.navLinkItem}>
            <Link to="/" className={CSS.navLinkText}>
              Home
            </Link>
          </li>
          <li className={CSS.navLinkItem}>
            <Link to="/about" className={CSS.navLinkText}>
              About
            </Link>
          </li>
          <li className={CSS.navLinkItem}>
            <Link to="/blog" className={CSS.navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Nav