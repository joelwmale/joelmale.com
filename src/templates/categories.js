import * as React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import _ from "lodash"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NewsletterComponent } from "../components/newsletter-component"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle} className="bg-[#404040]">
      <Seo
        title="A top quality dev blog"
        description="I sometimes share my top quality finds throughout the last fortnight, and tips and tricks along the way."
      />

      <div className="relative flex items-center justify-center w-full h-[60vh]">
        <div className="w-[95%] sm:w-[80%] flex flex-col items-center text-white">
          <div className="w-full text-center">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Category: {_.upperFirst(category)}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="py-10 text-center">
          <div className="max-w-[90%] lg:max-w-[60%] mx-auto">
            <h2 className="text-xl text-secondary sm:text-3xl">
              Subscribe to have some of this quality content delivered straight
              to your inbox
            </h2>
            <p className="mt-2 text-xs text-tertiary sm:text-sm lg:mt-0">
              I don't send very many emails, but when I do, they're jam-packed
              of awesome stuff.
            </p>

            <NewsletterComponent />
          </div>
        </div>
        <div className="py-10 max-w-[90%] lg:max-w-[100%] mx-auto">
          <h2 className="section-heading">Posts</h2>
          <div>
            {edges.length > 0 ? (
              <div className="h-max">
                <ul className="grid items-stretch justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                  {edges.map((node, i) => {
                    const { timeToRead } = node.node
                    const { slug } = node.node.fields
                    const { title, date } = node.node.frontmatter
                    return (
                      <li
                        key={i}
                        className="blog-post-gradient p-4 flex justify-start min-h-[180px]"
                      >
                        <Link to={slug} className="hover:cursor-pointer">
                          <article
                            itemScope
                            itemType="http://schema.org/Article"
                          >
                            <header>
                              <h2 className="text-2xl font-bold text-white">
                                {title || slug}
                              </h2>

                              <div className="text-gray-300">
                                <p className="text-xs uppercase">
                                  {timeToRead} min read <span>•</span> {date}
                                </p>
                              </div>
                            </header>
                          </article>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <p>No posts yet</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query ($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM YYYY")
          }
        }
      }
    }
  }
`
