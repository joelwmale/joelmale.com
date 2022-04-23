import * as React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import format from "date-fns/format"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Blog"
        description="I sometimes share my top quality finds throughout the last fortnight, and tips and tricks along the way."
      />

      <div className="relative flex items-center justify-center w-full py-[12rem]">
        <div className="w-[95%] sm:w-[80%] flex flex-col items-center text-white">
          <h1 className="text-6xl font-bold sm:text-8xl max-w-[100%] md:max-w-[90%] lg:max-w-[60%] mx-auto text-center">
            Blog
          </h1>
        </div>
      </div>

      <div className="max-w-4xl py-10 mx-auto">
        {posts.length > 0 ? (
          <div className="h-max">
            <ul className="grid items-stretch justify-center grid-cols-1 gap-y-6">
              {posts.map((post, i) => (
                <li class="px-4 lg:px-0">
                  <div class="grid grid-cols-6 py-8">
                    <div class="col-span-6 md:col-span-2">
                      <div>
                        {post.frontmatter.image &&
                          post.frontmatter.image.childImageSharp.resize && (
                            <img
                              src={
                                post.frontmatter.image.childImageSharp.resize
                                  .src
                              }
                              className="object-cover w-full h-full"
                              alt={post.frontmatter.title || post.fields.slug}
                              placeholder="none"
                              loading="eager"
                            />
                          )}
                      </div>
                      <div class="hidden md:block py-0.5">
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
                    <div class="col-span-6 md:col-span-4 flex flex-col md:pl-6 mt-2 md:pt-0">
                    <div class="block">
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
                      <Link to={`${post.fields.slug}`} class="blog-link">
                        <h3 class="text-3xl text-white font-bold duration-500 transition-all hover:text-yellow-500">
                          {post.frontmatter.title || post.fields.slug}
                        </h3>
                      </Link>

                      <p class="text-white mt-4 max-w-md font-body">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </div>
                  {/* if its not the last loop */}
                  {i !== posts.length - 1 && (
                    <div
                      className="w-full h-[1px] bg-slate-50"/>
                  )}
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
          categories
          title
          description
          image: featured {
            childImageSharp {
              resize(width: 1200) {
                src
                height
                width
              }
            }
          }
        }
      }
    }
  }
`
