import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Newsletter } from "../components/newsletter"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="bg-[#404040]">
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
                (This year will be the year I write more - Joel, every year
                before this)
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="py-10 text-center fade-in">
          <div className="max-w-[90%] lg:max-w-[60%] mx-auto">
            <h2 className="text-xl text-secondary sm:text-3xl">
              Subscribe to have some of this quality content delivered straight
              to your inbox
            </h2>
            <p className="mt-2 text-xs text-tertiary sm:text-sm lg:mt-0">
              I don't send very many emails, but when I do, they're jam-packed
              of awesome stuff.
            </p>

            <Newsletter />
          </div>
        </div>
        <div className="py-10 max-w-[90%] lg:max-w-[100%] mx-auto">
          <h2 className="section-heading">Writing</h2>
          <div>
            {posts.length > 0 ? (
              <div className="h-max">
                <ul className="grid items-stretch justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                  {posts.map((post, i) => (
                    <li
                      key={i}
                      className="blog-post-gradient p-4 flex justify-start min-h-[180px]"
                    >
                      <Link
                        to={post.fields.slug}
                        className="hover:cursor-ne-resize"
                      >
                        <article itemScope itemType="http://schema.org/Article">
                          <header>
                            <h2 className="text-2xl font-bold text-white">
                              {post.frontmatter.title || post.fields.slug}
                            </h2>

                            <div className="text-gray-300">
                              <p className="text-xs uppercase">
                                {post.timeToRead} min read <span>•</span>{" "}
                                {post.frontmatter.date}
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
              <p>No posts yet</p>
            )}
          </div>
        </div>
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
      limit: 6
    ) {
      nodes {
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
          description
        }
      }
    }
  }
`
