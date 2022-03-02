import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full border-b-[1px] border-b-[#222]">
      <div className="max-w-[90%] mx-auto py-4 flex-col sm:flex-row flex justify-between items-center">
        <Link to="/">
          <img src={logo} class="w-16 h-auto" alt="" />
        </Link>

        <div class="mt-4 mb-2 sm:my-0">
          <ul className="menu">
            <li>
              <Link to="/" activeClassName="underline bg-[#242424]">Home</Link>
            </li>
            <li>
              <Link to="/blog" activeClassName="underline bg-[#242424]">Blog</Link>
            </li>
            <li>
              <Link to="/newsletter" activeClassName="underline bg-[#242424]">Newsletter</Link>
            </li>
            <li>
              <Link to="/tools" activeClassName="underline bg-[#242424]">Tools</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
