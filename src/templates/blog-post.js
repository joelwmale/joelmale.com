import * as React from "react"
import { graphql } from "gatsby"

import { Newsletter } from "../components/newsletter"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Joel Male`
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={location.pathname}
      />

      <div className="flex justify-center pt-40">
        <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[756px] text-tertiary">
          <article itemScope itemType="http://schema.org/Article">
            <header>
              <h1
                itemProp="headline"
                className="text-3xl font-bold text-white md:text-5xl"
              >
                {post.frontmatter.title}
              </h1>

              <p className="uppercase text-[0.6rem] md:text-xs mb-8 mt-1 text-secondary">
                {post.timeToRead} min read <span>•</span>{" "}
                {post.frontmatter.date}
              </p>

              {post.frontmatter.description && (
                <div>
                  <p
                    itemProp="description"
                    className="mb-8 text-lg text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description,
                    }}
                  />
                </div>
              )}
              <div className="w-full bg-secondary h-[1px]"></div>
            </header>

            <section
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>

          <div>
            <div className="w-full bg-secondary h-[1px]"></div>

            <div className="pt-10 text-center">
              <h2 className="mb-6 text-xl text-secondary sm:text-3xl">
                Need more? Subscribe below 👇
              </h2>

              <div className="max-w-[90%] mx-auto">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
