import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NewsletterComponent } from "../components/newsletter-component"

const Newsletter = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} className="bg-[#404040]">
      <Seo
        title="A top quality dev blog"
        description="I sometimes share my top quality finds throughout the last fortnight, and tips and tricks along the way."
      />

      <div className="relative flex items-center justify-center w-full py-[12rem]">
        <div className="w-[95%] sm:w-[90%] flex flex-col items-center text-white">
          <div className="w-full text-center">
            <h1 className="sm:text-4xl text-2xl font-bold max-w-[90%] md:max-w-[70%] mx-auto text-centet">
              Subscribe to my newsletter to get updates delivered directly to
              your inbox.
            </h1>
            <div className="max-w-[90%] lg:max-w-[60%] mx-auto mt-4">
              <h2 className="py-8 text-base text-secondary lg:text-xl">
                I generally share my blog posts and some of the most valuable
                content I've found throughout the week. 🚀
              </h2>

              <NewsletterComponent />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Newsletter

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
