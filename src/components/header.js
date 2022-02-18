import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full border-b-[1px] border-b-purple-500">
      <div className="max-w-[90%] mx-auto py-2 flex-col sm:flex-row flex justify-between items-center">
        <Link to="/">
          <StaticImage
            objectFit="contain"
            formats={["png"]}
            src="../images/logo.png"
            width={70}
            height={54}
            quality={95}
            alt="Profile picture"
          />
        </Link>

        <div class="mt-4 mb-2 sm:my-0">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
