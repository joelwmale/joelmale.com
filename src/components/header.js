import * as React from "react"
import { Link } from "gatsby"

import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full">
      <div className="max-w-[90%] mx-auto py-4 flex-col sm:flex-row flex justify-between items-center">
        <Link to="/">
          <img src={logo} class="w-16 h-auto" alt="" />
        </Link>

        <div class="mt-4 mb-2 sm:my-0">
          <ul className="menu">
            <li>
              <Link to="/" class="blog-link" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/blog" class="blog-link" activeClassName="active">Blog</Link>
            </li>
            <li>
              <Link to="/newsletter" class="blog-link" activeClassName="active">Newsletter</Link>
            </li>
            <li>
              <Link to="/tools" class="blog-link" activeClassName="active">Tools</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
