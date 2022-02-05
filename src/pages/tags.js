import * as React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

// Utilities
import _ from "lodash"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Newsletter } from "../components/newsletter"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout title={title} className="bg-[#404040]">
    <Seo
      title="A top quality dev blog"
      description="I sometimes share my top quality finds throughout the last fortnight, and tips and tricks along the way."
    />

    <div className="relative flex items-center justify-center w-full h-[60vh]">
      <div className="w-[95%] sm:w-[80%] flex flex-col items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold sm:text-5xl hero-text">
            <span>I</span>
            <span>sometimes</span>
            <span>write</span>
            <span>stuff</span>
          </h1>
          <p className="text-xs mt-2 hero-text w-[80%] mx-auto sm:w-full">
            <span>
              (This year will be the year I write more - Joel, every year before
              this)
            </span>
          </p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-[1040px] mx-auto">
      <div className="py-10 text-center fade-in">
        <div className="max-w-[90%] lg:max-w-[60%] mx-auto">
          <h2 className="text-xl text-secondary sm:text-3xl">
            Subscribe to have some of this quality content delivered straight to
            your inbox
          </h2>
          <p className="mt-2 text-xs text-tertiary sm:text-sm lg:mt-0">
            I don't send very many emails, but when I do, they're jam-packed of
            awesome stuff.
          </p>

          <Newsletter />
        </div>
      </div>
      <div className="py-10 max-w-[90%] lg:max-w-[100%] mx-auto">
        <h2 className="section-heading">Tags</h2>
        <div>
          {group.length > 0 ? (
            <div className="h-max">
              <ul className="grid items-stretch justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                {group.map((tag, i) => (
                  <li
                    key={i}
                    className="blog-post-gradient p-4 flex justify-start min-h-[180px]"
                  >
                    <Link
                      to={`/tags/${_.kebabCase(tag.fieldValue)}/`}
                      className="hover:cursor-ne-resize"
                    >
                      <article itemScope itemType="http://schema.org/Article">
                        <header>
                          <h2 className="text-2xl font-bold text-white">
                            {_.upperFirst(tag.fieldValue)}
                          </h2>

                          <div className="text-gray-300">
                            <p className="text-xs uppercase">
                              {tag.totalCount} post
                              {tag.totalCount === 1 ? "" : "s"}
                            </p>
                          </div>
                        </header>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No categories found</p>
          )}
        </div>
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
