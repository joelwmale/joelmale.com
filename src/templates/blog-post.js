import * as React from "react"
import { graphql } from "gatsby"
import { NewsletterComponent } from "../components/newsletter-component"
import Layout from "../components/layout"
import Seo from "../components/seo"
import moment from "moment"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Joel Male`
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null

  // get last updated
  const updated =
    moment(parseInt(post.fields.modified, 10)).format("MMMM Do, YYYY") || null

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={location.pathname}
        image={image}
      />

      <div className="flex justify-center pt-[12rem]">
        <div className="max-w-[90%] sm:max-w-[90%] lg:max-w-[906px] text-tertiary">
          <article itemScope itemType="http://schema.org/Article">
            <header>
              <p className="mb-1 text-sm text-gray-700">
                {post.frontmatter.date} <span>•</span> {post.timeToRead} min
                read
              </p>
              <h1
                itemProp="headline"
                className="text-3xl font-bold text-white md:text-5xl"
              >
                {post.frontmatter.title}
              </h1>

              <div class="mb-4">
                {post.frontmatter.categories && (
                  <div class="flex">
                    <h3 class="text-white mr-2">Categories:</h3>
                    <ul className="flex flex-wrap">
                      {post.frontmatter.categories.map((category, i) => (
                        <li key={category} className="mr-2">
                          {i > 0 && (
                            <span className="mr-2 -ml-2 text-white">,</span>
                          )}
                          <a
                            href={`/categories/${category}`}
                            className="capitalize duration-500 text-secondary hover:text-yellow-500"
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

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
              <div className="w-full gradient-bg h-[1px]"></div>
            </header>

            <section
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>

          {updated && (
            <div className="flex flex-col mb-4">
              <h3 class="text-secondary opacity-20 text-sm">Last Updated</h3>
              <p class="text-white">{updated}</p>
            </div>
          )}

          <div class="pb-24">
            <div className="w-full bg-secondary h-[1px]"></div>

            <div className="pt-10 text-center">
              <h2 className="mb-6 text-xl text-secondary sm:text-3xl">
                Need more? Subscribe below 👇
              </h2>

              <div className="max-w-[90%] mx-auto">
                <NewsletterComponent />
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
      fields {
        created
        modified
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
