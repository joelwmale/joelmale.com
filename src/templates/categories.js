import * as React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import _ from "lodash"
import format from "date-fns/format"

import divider from "../../static/divider.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
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
        <div className="py-10 max-w-[90%] lg:max-w-[100%] mx-auto">
          <h2 className="section-heading">Posts</h2>
          <div>
            {edges.length > 0 ? (
              <div className="h-max">
            <ul className="grid items-stretch justify-center grid-cols-1 gap-y-6">
                  {edges.map((node, i) => {
                    const { timeToRead } = node.node
                    const { slug } = node.node.fields
                    const { title, date, image, description } = node.node.frontmatter
                    return (
                      <li>
                  <div class="grid grid-cols-6 py-8">
                    <div class="col-span-2">
                      <div>
                        {image &&
                          image.childImageSharp.resize && (
                            <img
                              src={
                                image.childImageSharp.resize
                                  .src
                              }
                              className="object-cover w-full h-full"
                              alt={title || slug}
                              placeholder="none"
                              loading="eager"
                            />
                          )}
                      </div>
                      <div class="py-0.5">
                        <time
                          dateTime={date}
                          class="text-white text-xs"
                        >
                          {format(
                            new Date(date),
                            "MMMM d, yyyy"
                          )}
                        </time>
                      </div>
                    </div>
                    <div class="col-span-4 flex flex-col pl-6">
                      <Link to={`${slug}`} class="blog-link">
                        <h3 class="text-3xl text-white font-bold duration-500 transition-all hover:text-yellow-500">
                          {title || slug}
                        </h3>
                      </Link>

                      <p class="text-white mt-4 max-w-md font-body">
                        {description}
                      </p>
                    </div>
                  </div>
                  {/* if its not the last loop */}
                  {i !== edges.length - 1 && (
                    <div
                      className="w-full h-2 bg-repeat-x"
                      style={{ backgroundImage: `url(${divider})` }}
                    />
                  )}
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
            description
          }
        }
      }
    }
  }
`
