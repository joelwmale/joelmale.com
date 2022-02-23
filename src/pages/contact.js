import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo 
        title="Contact" 
        description="I love giving advice and talking about all things web, dev, ops, and Laravel. I also love hearing the stories of others and how they made it as a dev."
        />

      <div className="relative flex items-center justify-center w-full h-screen">
        <div className="w-[95%] md:w-[90%] flex flex-col items-center text-white">
          <div className="w-max text-left -rotate-[10deg]">
            <a href="mailto:joel@joelmale.com">
              <h1 className="font-bold text-purple-500 duration-500 text-8xl hover:text-yellow-500">
                <span>joel@joelmale.com</span>
              </h1>
            </a>
          </div>
          <div className="mt-8 text-purple-500">
            <p>
              <span>Keep it simple. Send me an email.</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
