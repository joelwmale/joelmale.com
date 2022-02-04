import * as React from "react"
import { graphql, Link } from "gatsby"
import image from "../../static/404.gif"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Oops..." />

      <div className="relative flex flex-col items-center justify-center w-full h-screen text-white md:flex-row">
        <div class="flex flex-col items-center md:items-end pr-12">
          <h3 class="text-sm">Oops...</h3>
          <h1 class="text-8xl font-bold my-4">404 😢</h1>
          <p>How did you end up here?</p>
          <Link to="/" className="mt-8 link-btn">
            <span>Home</span>
          </Link>
        </div>
        <div class="hidden md:flex">
          <img src={image} alt="" class="max-h-[500px]" />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
