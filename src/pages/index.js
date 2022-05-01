import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import format from "date-fns/format"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="home">
      <Seo
        title="Joel Male: Backend Engineer & Mentor + Leader | Brisbane"
        forceTitle={true}
        description="I'm a backend developer using Laravel to solve problems and create fun experiences. I sometimes write content to share my knowledge with others."
      />

      <div className="relative flex items-center justify-center w-full py-[14rem]">
        <div className="w-[95%] md:w-[90%] flex flex-col items-center text-yellow-500">
          <div className="text-left w-max">
            <h1 className="font-bold text-center uppercase select-none w-max">
              <p class="text-[7rem] md:text-[12rem] leading-[0.8]">Joel</p>
              <p class="text-black bg-yellow-500 text-[7rem] md:text-[10rem] leading-[0.8] w-full">
                Male
              </p>
            </h1>
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-full arrow bottom-20 left-1/2 fade-in">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <main>
        <div className="w-[90%] max-w-[1040px] mx-auto">
          <div className="py-10">
            <h2 className="section-heading">Who am I?</h2>

            <div className="flex flex-col items-start justify-between w-full md:items-start md:flex-row">
              <div className="w-full mb-8 sm:mb-0 md:w-[60%] flex flex-col text-left items-start text-gray-200">
                <p className="pl-1 mt-3">
                  I'm&nbsp;
                  <a
                    href="https://twitter.com/joelwmale"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    @joelwmale
                  </a>
                  , a leader, freelancer, software engineer, devops specialist
                  and Laravel evangelist.{" "}
                </p>

                <p className="pl-1 mt-3">
                  I'm a software engineer and leader with an insane passion for
                  code and watching people grow. I spend a large portion of my
                  days in{" "}
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    VSCode
                  </a>{" "}
                  writing code, or listening to leadership podcasts to continue
                  growing my skill in nurturing developers into achieving their
                  goals.{" "}
                </p>

                <p className="pl-1 mt- 3">
                  If I'm not working, I am either engineering complex freelance
                  projects (like the one I'm currently working on, building an
                  e-commerce platform from scratch using the TALL stack for a
                  charity requiring a multivendor e-commerce store), or working
                  on side projects and open source work.
                </p>

                <p className="pl-1 mt-3">
                  I'm a leader that believes creating a culture of excellence
                  instead of perfection is one of the fundamental requirements
                  to being a great leader and creating high performing teams.
                </p>

                <p className="pl-1 mt-3">
                  This is what I've been up to lately:
                </p>

                <ul className="items-stretch grid gap-x-0 gap-y-3 mt-3 w-full max-w-[400px]">
                  <li className="up-to-highlight">
                    Started a digital agency 👉{" "}
                    <a href="https://wearepixel.com" target="_blank">
                      Pixel
                    </a>
                  </li>
                  <li className="up-to-highlight">
                    Discovering{" "}
                    <a href="https://tallstack.dev/" target="_blank">
                      TALL Stack
                    </a>
                  </li>
                  <li className="up-to-highlight">
                    Working on a side project, #buildinpublic
                  </li>
                  <li className="up-to-highlight">Eating chicken parmys 🔥</li>
                </ul>
              </div>

              <div className="w-full md:w-[40%] flex justify-center">
                <div className="relative w-max">
                  <StaticImage
                    objectFit="contain"
                    formats={["png"]}
                    src="../images/joel_male.png"
                    width={390}
                    height={468}
                    quality={95}
                    alt="Joel Male Developer"
                  />

                  <div className="absolute top-0 right-[1rem] md:right-[-1rem] lg:right-[1rem] text-right text-white">
                    <p className="pb-3 font-bold rotate-12">Actually me</p>
                    <svg
                      className="absolute right-0 rotate-90 top-full w-[100px] pt-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 208.54 176.57"
                    >
                      <path
                        d="M166.22,111h0c-27.75-34-64-68.92-110-72C47.08,21.48,31.3,7,12.37,1.13,9.3.84,1.39-1.63,0,1.8A1.6,1.6,0,0,0,1.55,3.44C23.34,3,42,20.88,52.17,38.81,32.07,37-13.6,52.12,13.13,76.48,43.23,100.67,76.18,82,58.52,43.92c10.46.69,20.59,3.73,30.16,7.92l-.08,0C123.47,68,151.3,97,172.76,128.41c9.5,14.07,15.28,31.09,24.36,44.93,7-.21-.36-9.06-1.41-12.42-8.64-17.32-17.23-34.82-29.49-49.93ZM122.74,73.25h0l-.13-.1.13.1ZM54.58,43.7C77.78,96,15.17,88.4,10.27,61,16.88,45.08,39.6,44.05,54.58,43.7Zm1.62,3.94c0,.07,0,.14.08.22,0-.08-.05-.15-.08-.22ZM9.75,3.8h0l-.11,0,.11,0ZM43,44.05h0l-.19,0,.19,0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M208.54,156.54c-.43,5.7-3.87,11.27-5.36,16.9a1.55,1.55,0,0,1-1.89,1c-2.55-1.23.31-4.49.57-6.45-2.06,2-1.8,6.68-5.19,6.6-1.5,7.14-16.94-7.51-20.46-9.33l.54.44a2.87,2.87,0,0,1,.05-5.08c6.9.11,13.22,6.45,19.72,9,2.55-2,9.15-16.78,12-13.11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="mb-1.5 pt-10 mt-4 md:mt-8 lg:mt-6 text-white relative w-max">
                    <p className="font-bold rotate-6">
                      I never wear collar shirts
                      <br />
                      because they are uncomfortable
                    </p>
                    <svg
                      className="-rotate-[250deg] md:-rotate-[280deg] lg:-rotate-[250deg] scale-x-[-1] absolute top-0 right-0"
                      xmlns="http://www.w3.org/2000/svg"
                      height="10"
                      width="70"
                      viewBox="0 0 123.85 12.57"
                    >
                      <path
                        d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 mx-auto">
            <h2 className="section-heading">Pixel</h2>

            <div class="max-w-3xl">
              <p className="pl-1 mt-3 mb-6 text-white md:text-lg">
                In 2022, I decided to quit my full time job and start a{" "}
                <a
                  href="https://wearepixel.com.au"
                  rel="dofollow"
                  target="_blank"
                >
                  shopify focused digital agency.
                </a>{" "}
                I've had some incredible feedback from clients already that we
                are changing the agency game.
                <br />
                <br />I wrote a blog post diving into the decision,{" "}
                <Link to="/announcing-pixel">read it here.</Link>
              </p>

              <a
                href="https://wearepixel.com.au"
                target="_blank"
                className="link-btn"
              >
                <span>Visit the website</span>
              </a>
            </div>
          </div>

          <div className="w-full py-10 mx-auto">
            <h2 className="section-heading">Blog</h2>

            <div className="py-6 mx-auto">
              {posts.length > 0 ? (
                <div className="h-max">
                  <ul className="divide-y divide-dark-500">
                    {posts.map((post, i) => (
                      <li class="px-4 sm:px-6 py-4 hover:bg-dark-400">
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

            <div class="w-full flex justify-center">
              <Link to="/blog" className="link-btn">
                <span>view more</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home

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
