import * as React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import format from "date-fns/format"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NewsletterComponent } from "../components/newsletter-component"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Blog"
        description="I sometimes share my top quality finds throughout the last fortnight, and tips and tricks along the way."
      />

      <div className="relative flex items-center justify-center w-full pt-[12rem] pb-32">
        <div className="w-[95%] sm:w-[80%] flex flex-col items-center text-white">
          <h1 className="text-6xl font-bold sm:text-7xl max-w-[100%] md:max-w-[90%] lg:max-w-[60%] mx-auto text-center">
            Blog
          </h1>
          <h2 className="max-w-lg py-8 text-base text-center text-secondary lg:text-xl">
            I generally share my blog posts and some of the most valuable
            content I've found throughout the week 🚀
          </h2>
        </div>
      </div>

      <div className="w-[90%] sm:w-full max-w-4xl mx-auto mb-6">
        <NewsletterComponent />
      </div>

      <div className="max-w-4xl py-10 mx-auto">
        {posts.length > 0 ? (
          <div className="h-max">
            <ul className="divide-y divide-dark-500">
              {posts.map((post, i) => (
                <li class="px-6 py-4 hover:bg-dark-400">
                  <div class="flex flex-col sm:flex-row justify-between py-2">
                    <div>
                      <Link to={`${post.fields.slug}`} class="blog-link">
                        <h3 class="text-2xl text-white font-bold duration-500 transition-all hover:text-yellow-500">
                          {post.frontmatter.title || post.fields.slug}
                        </h3>
                      </Link>

                      <p class="text-white opacity-80 max-w-2xl font-body">
                        {post.frontmatter.description}
                      </p>
                    </div>
                    <div class="flex items-end mt-2 sm:mt-0">
                      <time
                        dateTime={post.frontmatter.date}
                        class="text-white text-xs"
                      >
                        {format(
                          new Date(post.frontmatter.date),
                          "MMMM d, yyyy"
                        )}
                      </time>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No posts yet</p>
        )}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      nodes {
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`
